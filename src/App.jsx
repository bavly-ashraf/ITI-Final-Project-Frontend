import { useState } from "react";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ReactDOM from "react-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div>
        <Header />

        <AppRoutes />
        <Footer />
        {/* <ProductDetails /> */}
        {/* <AdminDashBoard/> */}
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
