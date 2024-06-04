// import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import serverInstance from "../api/server";
// import toast from "react-hot-toast";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(localStorage.getItem("accesstoken"));
//   const [refreshToken, setRefreshToken] = useState(
//     localStorage.getItem("refreshToken")
//   );
//   const [isAdmin, setIsAdmin] = useState(
//     localStorage.getItem("isAdmin") === "true"
//   );
//   const [currentEmail, setcurrentEmail] = useState(null);

//   const login = async ({ email, password }) => {
//     console.log(email, password);
//     try {
//       const res = await serverInstance.post("/user/login", { email, password });
//       localStorage.setItem("accesstoken", res.data.accessToken);
//       localStorage.setItem("refreshToken", res.data.refreshToken);
//       setcurrentEmail(res.data.email);
//       setToken(res.data.accessToken);
//       setRefreshToken(res.data.refreshToken);
//       if (res.data.isAdmin === true) {
//         toast.success("Admin logged in");
//         localStorage.setItem("isAdmin", res.data.isAdmin);
//         setIsAdmin(res.data.isAdmin);
//         navigate("/");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const signup = async ({ username, email, password }) => {
//     try {
//       const res = await serverInstance.post("/user/register", {
//         username,
//         email,
//         password,
//       });
//       console.log(res.data);
//       toast.success("Account created successfully");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response.data.message);
//       console.log(error);
//     }
//   };

//   const logOutFromPortal = () => {
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("accesstoken");
//     localStorage.removeItem("refreshToken");
//     setIsAdmin(false);
//     setToken(null);
//     setRefreshToken(null);
//     navigate("/");
//     window.location.reload();
//   };

//   const logOut = () => {
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("accesstoken");
//     localStorage.removeItem("refreshToken");
//     setToken(null);
//     setRefreshToken(null);
//     toast.success("Logged out");
//     navigate("/");
//     window.location.reload();
//   };

//   const getNewAccessToken = async (refreshToken, email) => {
//     try {
//       const response = await serverInstance.post("/user/refresh", {
//         email,
//         refreshToken,
//       });
//       localStorage.setItem("accesstoken", response.data.accessToken);
//       localStorage.setItem("refreshToken", response.data.refreshToken);
//       setToken(response.data.accessToken);
//       setRefreshToken(response.data.refreshToken);
//       return response.data.accessToken;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAdmin,
//         token,
//         login,
//         signup,
//         logOutFromPortal,
//         logOut,
//         getNewAccessToken,
//         currentEmail,
//         refreshToken,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import serverInstance from "../api/server";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("accesstoken"));
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const refreshToken = async () => {
    const email = localStorage.getItem("email");
    if (!email || !token) {
      logOut();
      return;
    }
    try {
      const response = await serverInstance.post(
        "/user/refresh",
        { email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.setItem("accesstoken", response.data.accessToken);
      setToken(response.data.accessToken);
      return response.data.accessToken;
    } catch (error) {
      logOut();
      toast.error("Session expired, please log in again");
      throw error;
    }
  };

  serverInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newToken = await refreshToken();
          console.log(newToken);
          return serverInstance(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );

  const login = async ({ email, password }) => {
    try {
      const res = await serverInstance.post("/user/login", { email, password });
      localStorage.setItem("accesstoken", res.data.accessToken);
      localStorage.setItem("email", email);
      setToken(res.data.accessToken);
      if (res.data.isAdmin === true) {
        toast.success("Admin logged in");
        localStorage.setItem("isAdmin", res.data.isAdmin);
        setIsAdmin(res.data.isAdmin);
        navigate("/");
      } else {
        navigate("/");
      }
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const signup = async ({ username, email, password }) => {
    try {
      const res = await serverInstance.post("/user/register", {
        username,
        email,
        password,
      });
      toast.success("Account created successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logOutFromPortal = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("email");
    setIsAdmin(false);
    setToken(null);
    navigate("/");
    window.location.reload();
  };

  const logOut = () => {
    toast.success("Logged out");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("email");
    setToken(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ isAdmin, token, login, signup, logOutFromPortal, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Hook To use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
