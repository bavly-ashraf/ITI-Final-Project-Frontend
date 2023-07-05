import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth); // Add this line to log the `auth` object

  if (!auth.accessToken) {
    return <Navigate to="/*" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(auth.roles)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
