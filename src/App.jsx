import { useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CartItem from "./components/cartItem/CartItem";
function App() {
  return (
    <div>
      <CartItem />
    </div>
  );
}
export default App;
