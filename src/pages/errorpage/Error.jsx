import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
export default function NotFound() {
  return (
    <div
      style={{ backgroundColor: "#fbf8f5" }}
      id="containerAnimation"
      className="container-bottom-to-up  flex items-center justify-center min-h-screen bg-gray-100"
    >
      {/* <div id="containerAnimation" class="container-overFlowVisible" >   <p style="animation-duration: 366ms;" class="left-to-right">Hello wordtest</p>  </div> */}
      <div
        className="max-w-md w-full p-8 bg-white rounded-lg shadow-md"
        style={{ backgroundColor: "#fbf8f5", animationDuration: "366ms" }}
      >
        <div className="top-to-bottom text-5xl font-dark font-bold">404</div>
        <p
          // style={{ animationDuration: "5000ms" }}
          className="top-to-bottom text-2xl md:text-3xl font-light leading-normal"
        >
          Sorry, we couldn't find this page.
        </p>
        <p className="top-to-bottom mb-8">
          But don't worry, you can find plenty of other things on our homepage.
        </p>

        <button className="px-4 py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-yellow-600 active:bg-blue-600 hover:bg-blue-700">
          <Link
            to="/"
            className="font-bold underline text-primary-600 hover:underline dark:text-primary-500"
          >
            Back to homepage{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}
