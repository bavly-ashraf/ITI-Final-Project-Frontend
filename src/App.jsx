
import { useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import UserProfile from "./pages/userProfile/UserProfile";
import './App.css'
import ProductDetails from './pages/productDetails/ProductDetails'
import AdminDashBoard from './pages/adminDashboard/AdminDashboard'
import Slider from "./components/slider/Slider";
    import CartItem from "./components/cartItem/CartItem";

function App() {
  return (
        <>
         <ProductDetails/>
      {/* <AdminDashBoard/> */}
      <CartItem />
    <Home />
    <UserProfile />
     </>


  );

}

export default App
