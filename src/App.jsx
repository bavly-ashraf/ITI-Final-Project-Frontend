
import { useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserProfile from "./pages/userProfile/UserProfile";
import './App.css'
import ProductDetails from './pages/productDetails/ProductDetails'
import AdminDashBoard from './pages/adminDashboard/AdminDashboard'

function App() {
  return (
        <>
         <ProductDetails/>
      {/* <AdminDashBoard/> */}

    <UserProfile />
     </>
  );

}

export default App
