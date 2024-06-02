import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.isAdmin) {
    alert("You are not authorized to view this page. Reload the Page!");
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
