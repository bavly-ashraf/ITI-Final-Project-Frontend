/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ProductDetailsItem = (props) => {

  const [counter, setCounter] = useState(0);
  let name = props.product.name;
  let price = props.product.price;
  let no_of_items_in_stock = props.product.no_of_items_in_stock;
  let isAvailable = no_of_items_in_stock > 0 ? true : false;
  let shownNumber =
    counter > no_of_items_in_stock ? no_of_items_in_stock : counter;
  let isCounterEqualToItems = counter == no_of_items_in_stock ? true : false;

  function increament() {
    if (counter == no_of_items_in_stock) {
      setCounter(no_of_items_in_stock);
    } else {
      setCounter(counter + 1);
    }
  }

  function decreament() {
    setCounter((prevCounter) => {
      if (!prevCounter <= 0) {
        return counter - 1;
      } else {
        return prevCounter;
      }
    });
  }

  return (
    <div className="ms-10 w-max block rounded-lg bg-[#FBF8F5]  dark:bg-neutral-700 ">
      <h5 className="mb-2 text-5xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {name}
      </h5>
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Price:<span style={{ color: "#E9672B" }}> ${price}/mo</span>
      </h3>
      <h2 className="my-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
        <strong>Color</strong> : Oak
      </h2>
      <img
        className="hover:outline-gray-400 rounded-full w-14 h-14 outline outline-2 outline-black cursor-pointer border-4 border-white"
        src="src\assets\Images\ProductDetails\Button\gea-cof-05_swatch.webp"
      />
      <h2 className="my-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
        <strong>Quantity:</strong>
      </h2>
      <div>
        {isAvailable ? (
          <div className="flex items-center border border-gray-200 w-fit">
            <button
              type="button"
              onClick={decreament}
              className={`bg-white ${
                counter > 0 ? "hover:bg-gray-400" : ""
              } w-14 h-14 text-2xl leading-10 text-gray-600 `}
            >
              &minus;
            </button>
            <input
              type="number"
              id="Quantity"
              value={counter < 0 ? 0 : shownNumber}
              className="h-10 w-16 border-transparent text-center"
            />
            <button
              type="button"
              onClick={increament}
              className={`bg-white ${
                !isCounterEqualToItems ? "hover:bg-gray-400" : ""
              } w-14 h-14 text-2xl leading-10 text-gray-600 `}
            >
              <strong>+</strong>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="my-14 font-medium leading-tight">
        {isAvailable ? (
          <button
            type="button"
            className="bg-[#EA6C31] hover:bg-[#DE5312] text-xl w-80 h-14 text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add to Cart
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#EA6C31] hover:bg-[#DE5312] text-xl w-80 h-14 text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2 mb-2"
          >
            Out Of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsItem;
