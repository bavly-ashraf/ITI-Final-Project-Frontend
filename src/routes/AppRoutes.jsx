import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import NotFound from "../pages/errorpage/Error.jsx";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import ForgotPassword from "../pages/forgetPassword/ForgetPassword";
import ProductDetails from "../pages/productDetails/ProductDetails";
import AdminDashBoard from "../pages/adminDashboard/AdminDashboard";
import CartItem from "../components/cartItem/CartItem";
import About from "../pages/about/About";
import RequireAuth from "../context/RequireAuth";
import Unauthorized from "../pages/unauthorised/Unauthorized";
// const ROLES = {
//   User: "user",
//   // Editor: 1984,
//   // Admin: 5150,
//   Admin: "Admin",
// };
const ROLES = {
  User: "user",
  Admin: "admin",
};
console.log("hey there122");

const AppRoutes = () => {
  return (
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/" element={<Home />} />
    //   <Route path="/loading" element={<LoadingAnimation />} />
    //   <Route path="/*" element={<NotFound />} />
    //   <Route path="/ForgotPassword" element={<ForgotPassword />} />
    //   <Route path="/ProductDetails" element={<ProductDetails />} />
    //   <Route path="/CartItem" element={<CartItem />} />
    //   <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
    //   <Route path="/About" element={<About />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/loading" element={<LoadingAnimation />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      {/* <Route path="/cartitem" element={<CartItem />} /> */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard />} />

      {/* restrict access to this route to users with the 'Admin' role */}

      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/cartitem" element={<CartItem />} />
      </Route>

      <Route
        path="/about"
        element={
          <RequireAuth allowedRoles={[ROLES.Admin]}>
            <About />
          </RequireAuth>
        }
      />
      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
