// import PropTypes from "prop-types";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   const validateRoles = (roles) => {
//     if (!Array.isArray(roles)) {
//       return new Error("allowedRoles must be an array");
//     }
//     if (roles.some((role) => typeof role !== "string")) {
//       return new Error("allowedRoles must contain only strings");
//     }
//     return null;
//   };

//   const rolesError = validateRoles(allowedRoles);
//   if (rolesError) {
//     throw rolesError;
//   }

//   return (
//     <>
//       {auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//         <Outlet />
//       ) : auth?.user ? (
//         <Navigate to="/signup" state={{ from: location }} replace />
//       ) : (
//         <Navigate to="/login" state={{ from: location }} replace />
//       )}
//     </>
//   );
// };

// RequireAuth.propTypes = {
//   allowedRoles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
// };

// // export default RequireAuth;
// import PropTypes from "prop-types";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { useState } from "react";
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   const validateRoles = (roles) => {
//     if (!Array.isArray(roles)) {
//       return new Error("allowedRoles must be an array");
//     }
//     if (roles.some((role) => typeof role !== "string")) {
//       return new Error("allowedRoles must contain only strings");
//     }
//     return null;
//   };

//   const rolesError = validateRoles(allowedRoles);
//   if (rolesError) {
//     console.log(rolesError.message);
//     throw rolesError;
//   }

//   return (
//     // <>
//     //   {allowedRoles.includes(auth?.user?.role) ? (
//     //     <Outlet />
//     //   ) : auth?.user ? (
//     //     <Navigate to="/productdetails" state={{ from: location }} replace />
//     //   ) : (
//     //     <Navigate to="/forgotpassword" state={{ from: location }} replace />
//     //   )}
//     // </>
//     <>
//       {allowedRoles.includes(auth?.user?.role) ? (
//         <Outlet />
//       ) : auth?.user ? (
//         <Navigate to="/productdetails" state={{ from: location }} replace />
//       ) : (
//         <Navigate to="/forgotpassword" state={{ from: location }} replace />
//       )}
//     </>
//   );
// };

// RequireAuth.propTypes = {
//   allowedRoles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
// };

// export default RequireAuth;
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// console.log(auth.roles);
console.log("hey from auth");
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//     <Outlet />
//   ) : auth?.user ? (
//     <Navigate to="/signup" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/forgetpassword" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//     <Outlet />
//   ) : auth?.user ? (
//     <Navigate to="/signup" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/forgetpassword" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/forgetpassword" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(auth.roles)) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
