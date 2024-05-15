import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
import serverInstance from "../api/server";
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
        console.log(res.data);
        setToken(res.data.accessToken);
        if (res.data.isAdmin === true) {
          console.log("Admin logged in");
          localStorage.setItem("isAdmin", res.data.isAdmin);
          setIsAdmin(res.data.isAdmin);
          navigate("/portal/teams");
        } else navigate("/");
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signup = async ({ username, email, password }) => {
    serverInstance
      .post("/user/register", { username, email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logOutFromPortal = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("accesstoken");
    setIsAdmin(false);
    navigate("/signin");
  };
  const logOut = () => {
    console.log("logging out...");
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
