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
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loading" element={<LoadingAnimation />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <h1 className="custom-font custom-font-black">feather 1 - Black</h1>
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
      </h1>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/team" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      );
      {/* <Header />
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <Home />
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
      <Footer />  */
}
{
  /* <Login /> */
}
{
  /* <SignUp /> */
}
// <LoadingAnimation />
{
  /* <h1 className="custom-font">This is a sample text using the custom font</h1>
      <h1 >This is a sample text using the custom font.</h1> */
}
{
  /* 
     <NotFound />  */
}
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/loading" element={<LoadingAnimation />} />
//       <Route path="/notfound" element={<NotFound />} />
//     </Routes>
//     <Footer />
//   </Router>
// </div> */}
