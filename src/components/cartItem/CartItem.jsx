import React, { useState } from "react";

const CartItem = () => {
  return (
    // container
    <div className="w-full">
      {/* header */}
      <div className="flex justify-between">
        <h1 className="m-8 font-bold text-2xl">Your Bag</h1>
        <a
          href="#"
          className="m-8 text-orange-600 decoration-orange-600 underline decoration-solid"
          // bg-[#sdfggf]
        >
          Remove All
        </a>
      </div>

      {/* content */}
      <div className="flex justify-around m-8 ">
        <figure>
          {/* link */}
          <img
            className="w-40 h-20"
            src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80.png"
            alt="sofa"
          />
        </figure>
        {/* description */}
        <div>
          <h2 className="font-bold text-xl">KLIPPAN</h2>
          <span>3-seat sofa, Brown</span>
        </div>
        {/* Increament & Decreament */}
        <div className="m-5">
          <button className="w-6 h-6 rounded-full bg-slate-200">-</button>
          <button className="p-2">1</button>
          <button className="w-6 h-6 rounded-full bg-slate-200">+</button>
        </div>
        {/* Price & Remove*/}
        <div>
          <div className="font-bold text-xl">$225</div>
          <a
            href="#"
            className="text-orange-600 decoration-orange-600 underline decoration-solid"
          >
            Remove
          </a>
        </div>
      </div>

      {/* line */}
      <div className="flex justify-around m-6">
        <div className="w-1/3"></div>
        <div className="w-2/3 border-2 border-amber-100"></div>
      </div>

      {/* Total $ Checkout */}
      <div className="flex justify-around m-6">
        <div className="w-2/3"> </div>
        <div className="w-1/3">
          <span className="m-8 text-l">Total </span>
          <span className="m-20 font-bold text-xl">$3500</span>
        </div>
      </div>

      {/* checkout */}
      <div className="flex justify-around m-6">
        <div className="w-2/3"></div>
        <div className="w-1/3">
          <button className="w-80 h-10 text-lg bg-slate-300 rounded-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
