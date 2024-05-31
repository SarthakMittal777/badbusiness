import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
import serverInstance from "../api/server";
import toast from "react-hot-toast";
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("accesstoken"));
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );
  const login = async ({ email, password }) => {
    serverInstance
      .post("/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("accesstoken", res.data.accessToken);

        setToken(res.data.accessToken);
        if (res.data.isAdmin === true) {
          toast.success("Admin logged in");
          localStorage.setItem("isAdmin", res.data.isAdmin);
          setIsAdmin(res.data.isAdmin);
          navigate("/portal/teams");
        } else navigate("/");
        return res;
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const signup = async ({ username, email, password }) => {
    serverInstance
      .post("/user/register", { username, email, password })
      .then((res) => {
        console.log(res.data);
        toast.success("Account created successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  };
  const logOutFromPortal = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out");
    localStorage.removeItem("accesstoken");
    setIsAdmin(false);
    navigate("/signin");
  };
  const logOut = () => {
    toast.success("Logged out");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("accesstoken");
    setToken(null);
    navigate("/signin");
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

export const useAuth = () => {
  return useContext(AuthContext);
};
