import { useState } from "react";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import OrderStatus from "./components/orderStatus/OrderStatus";
function App() {
  return (
    // <div>
    //   <Header />
    //   <div className="rating">
    //     <input
    //       type="radio"
    //       name="rating-2"
    //       className="mask mask-star-2 bg-orange-400"
    //     />
    //     <input
    //       type="radio"
    //       name="rating-2"
    //       className="mask mask-star-2 bg-orange-400"
    //       checked
    //     />
    //     <input
    //       type="radio"
    //       name="rating-2"
    //       className="mask mask-star-2 bg-orange-400"
    //     />
    //     <input
    //       type="radio"
    //       name="rating-2"
    //       className="mask mask-star-2 bg-orange-400"
    //     />
    //     <input
    //       type="radio"
    //       name="rating-2"
    //       className="mask mask-star-2 bg-orange-400"
    //     />
    //   </div>
    //   {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    //   <Home />
    //   <button class="btn btn-primary">One</button>
    //   <button class="btn btn-secondary">Two</button>
    //   <button class="btn btn-accent btn-outline">Three</button>
    //   <Footer />
    // </div>
    <OrderStatus />
  );
}
export default App;
