import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

const WebsiteAuth = () => {
  const user = useAuth();
  if (!user.token) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

export default WebsiteAuth;
