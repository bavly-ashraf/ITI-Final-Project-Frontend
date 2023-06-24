import { useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/errorpage/Error.jsx";
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation";
import ForgotPassword from "./pages/forgetPassword/ForgetPassword";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./pages/userProfile/UserProfile";
import "./App.css";
import ProductDetails from "./pages/productDetails/ProductDetails";
import AdminDashBoard from "./pages/adminDashboard/AdminDashboard";
import Slider from "./components/slider/Slider";
import CartItem from "./components/cartItem/CartItem";
import ProductListing from "./pages/productsListing/ProductsListing";

function App() {
  return (
    <>
      <div>
        {/* <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loading" element={<LoadingAnimation />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/CartItem" element={<CartItem />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
        </Routes>
        <Footer /> */}
        {/* <ProductDetails /> */}
        <AdminDashBoard/>
        {/* <ProductListing/> */}
        {/* <CartItem /> */}

        {/* <UserProfile /> */}
        {/* <h1 className="custom-font custom-font-black">feather 1 - Black</h1>
      <h1 className="custom-font custom-font-blackitalic">
        Feather 1 - Black Italic
      </h1>
      <h1 className="custom-font custom-font-bold">Feather 1 - Bold</h1>
      <h1 className="custom-font custom-font-bolditalic">
        Feather 1 - Bold Italic
      </h1>
      <h1 className="custom-font custom-font-book">Feather 1 - Book</h1>
      <h1 className="custom-font custom-font-bookitalic">
        Feather 1 - Book Italic
      </h1>
      <h1 className="custom-font custom-font-extrabold">
        Feather 1 - Extra Bold
      </h1>
      <h1 className="custom-font custom-font-extrabolditalic">
        Feather 1 - Extra Bold Italic
      </h1>
      <h1 className="custom-font custom-font-hairline">Feather 1 - Hairline</h1>
      <h1 className="custom-font custom-font-hairlineitalic">
        Feather 1 - Hairline Italic
      </h1>
      <h1 className="custom-font custom-font-light">Feather 1 - Light</h1>
      <h1 className="custom-font custom-font-lightitalic">
        Feather 1 - Light Italic
      </h1>
      <h1 className="custom-font custom-font-medium">Feather 1 - Medium</h1>
      <h1 className="custom-font custom-font-mediumitalic">
        Feather 1 - Medium Italic
      </h1>
      <h1 className="custom-font custom-font-thin">Feather 1 - Thin</h1>
      <h1 className="custom-font custom-font-thinitalic">
        Feather 1 - Thin Italic
      </h1> */}
      </div>
    </>
  );
}
export default App;
