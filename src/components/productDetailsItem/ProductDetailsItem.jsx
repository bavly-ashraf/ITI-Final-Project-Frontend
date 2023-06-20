/* eslint-disable react/no-unknown-property */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ProductDetailsItem = () => {

    const [counter,setCounter]=useState(0);

    function increament()
    {
        setCounter(counter+1);
        console.log(counter);
    }
    
    function decreament()
    {
        setCounter((prevCounter)=>{
            if(!prevCounter<=0)
            {
                return counter-1;
            }
            else
            {
                return prevCounter;
            }
        });
        console.log(counter);
    }

  return (
    <div className="ms-10 w-max block rounded-lg bg-[#FBF8F5]  dark:bg-neutral-700 ">
      <h5 className="mb-2 text-5xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Geary Coffee Table
      </h5>
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Rent for<span style={{ color: "#E9672B" }}>$35/mo</span>
      </h3>
      <h2 className="my-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
        <strong>Color</strong> : Oak
      </h2>
      <img
        className="rounded-full w-14 h-14 outline outline-2 outline-black cursor-pointer border-4 border-white"
        src="src\assets\Images\ProductDetails\Button\gea-cof-05_swatch.webp"
      />
      <h2 className="my-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
        <strong>Quantity:</strong>
      </h2>
      <div>
        <div className="flex items-center border border-gray-200 w-fit">
          <button type="button"
            onClick={decreament}
            className="w-14 h-14 text-2xl leading-10 text-gray-600 transition hover:opacity-75"
            >
            &minus;
          </button>
          <input type="number"
            id="Quantity"
            value={counter<0 ? 0 : counter}
            className="h-10 w-16 border-transparent text-center"
            />
          <button type="button"
            onClick={increament}
            className="w-14 h-14 text-2xl leading-10 text-gray-600 transition hover:opacity-75"
          >
            <strong>+</strong>
          </button>
        </div>
      </div>
      <div className="my-14 font-medium leading-tight">
        <button  type="button" className="bg-[#EA6C31] hover:bg-[#DE5312] text-xl w-80 h-14 text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2 mb-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
