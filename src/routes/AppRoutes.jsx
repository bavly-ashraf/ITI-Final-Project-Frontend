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
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<LoadingAnimation />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ProductDetails" element={<ProductDetails />} />
      <Route path="/CartItem" element={<CartItem />} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
