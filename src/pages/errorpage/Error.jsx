
import React  from "react";

export default function NotFound() {
    return (

       
<div style={{ backgroundColor: "#fbf8f5" }} className="flex items-center justify-center min-h-screen bg-gray-100">
<div
  className="max-w-md w-full p-8 bg-white rounded-lg shadow-md"
  style={{ backgroundColor: "#fbf8f5" }}
>
  <div className="text-5xl font-dark font-bold">404</div>
  <p className="text-2xl md:text-3xl font-light leading-normal">
    Sorry, we couldn't find this page.
  </p>
  <p className="mb-8">
    But don't worry, you can find plenty of other things on our homepage.
  </p>

  <button className="px-4 py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-yellow-600 active:bg-blue-600 hover:bg-blue-700">
    Back to homepage
  </button>
</div>
</div>

);
}





