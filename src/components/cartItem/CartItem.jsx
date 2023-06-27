/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div>
      <div className="p-40">
    <section className="flex flex-wrap">
      {/* header */}
      <div className="w-full flex justify-between">
        <h1 className="m-10 mr-18 lg:m-6 lg:ml-6 custom-font-bold text-2xl">
          Your Bag
        </h1>

        <button className="m-7 btn btn-outline-orange-500 bg-orange-500 hover:bg-orange-600 text-white">
          Remove All
        </button>
      </div>

      <section className="w-full flex flex-wrap justify-around">
        <div className="block">
        <section className="flex shadow-lg shadow-bg-slate-200-500/50  my-3">
          <figure className="">
            <img
              className="w-40 h-20 "
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80.png"
              alt="sofa"
            />
          </figure>

          <div className="px-3">
            <h2 className="custom-font-bold text-xl">KLIPPAN</h2>
            <div className="custom-font-bold text-xl">$225</div>
          </div>

          <div className="px-3">
            <button className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300">
              -
            </button>
            <button className="px-3">1</button>
            <button className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300">
              +
            </button>
          </div>

          <div className="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-[#FBF8F5] text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </section>
        
        
        </div>
        
        {/* Order Summary */}
        <section className="p-3 m-5 bg-orange-100">
          <h2 className="custom-font-bold"> Order Summary</h2>

          <div className="flex justify-between my-5 pb-5 border-b-2 border-gray-400">
            <p className="custom-font-bold">Subtotal:</p>
            <p className="custom-font-bold">$3300</p>
          </div>

          <div className="flex justify-center">
            <input type="checkbox" className="p-4" />
            <label htmlFor="" className="text-gray-600 p-4">
              I agree to Feather's
              <Link to="#" className="underline decoration-solid">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <div className="flex justify-center py-5 ">
            <button className="w-80 h-10 text-lg bg-slate-300 hover:bg-slate-400 rounded-full">
              Checkout
            </button>
          </div>
        </section>
        
      </section>
      

    </section>
    </div>
    </div>
  );
};

export default CartItem;