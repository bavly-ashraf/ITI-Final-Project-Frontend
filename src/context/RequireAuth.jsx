// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// console.log("hey from auth11111111");

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     return <Navigate to="/productdetails" state={{ from: location }} replace />;
//   }

//   if (!allowedRoles.includes(auth.roles)) {
//     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
//   }

//   return <Outlet />;
// };

// export default RequireAuth;

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.accessToken) {
    return <Navigate to="/productdetails" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(auth.roles)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
