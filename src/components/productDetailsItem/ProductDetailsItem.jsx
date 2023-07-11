/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import ProductReview from "../productReview.jsx/ProductReview";
import { ToastContainer, toast } from "react-toastify";

const ProductDetailsItem = (props) => {
  const [counter, setCounter] = useState(0);
  let name = props.product.name;
  let price = props.product.price;
  let no_of_items_in_stock = props.product.no_of_items_in_stock;
  let isAvailable = no_of_items_in_stock > 0 ? true : false;
  let shownNumber =
    counter > no_of_items_in_stock ? no_of_items_in_stock : counter;
  let isCounterEqualToItems = counter == no_of_items_in_stock ? true : false;
  let setAddedToFav = props.setAddedToFav;
  let addedToFav = props.addedToFav;
  let currentId = props.id;
  let addToFavServerSide = props.addToFavServerSide;
  let removeFromFavServerSide = props.removeFromFavServerSide;
  let inCart = props.inCart;
  let setInCart = props.setInCart;
  let orderedItem = props.orderedItem;

  const notify = () =>
    toast.success("Item Added To Fav List", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const errorMsg = (err) =>
    toast.error("Item Removed From Fav List", {
      position: toast.POSITION.TOP_RIGHT,
    });

  function addToFav(id) {
    setAddedToFav(!addedToFav);
    addedToFav ? removeFromFavServerSide(id) : addToFavServerSide(id);
    addedToFav ? errorMsg() : notify();
  }

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
    <>
      <div className="d-flex flex-col">
        <div className="ms-10 w-max block rounded-lg bg-[#FBF8F5]  dark:bg-neutral-700 ">
          <h5 className="mb-2 text-5xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Price:<span style={{ color: "#E9672B" }}> {price} EGP</span>
          </h3>
          {/* <h2 className="my-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
            <strong>Color</strong> : Oak
          </h2>
          <img
            className="hover:outline-gray-400 rounded-full w-14 h-14 outline outline-2 outline-black cursor-pointer border-4 border-white"
            src="src\assets\Images\ProductDetails\Button\gea-cof-05_swatch.webp"
          /> */}
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
          {inCart ? (
            <div className="mt-6 text-md leading-tight text-neutral-800 dark:text-neutral-50">
              <strong>Item is in Cart</strong>
              <button
                type="button"
                className="bg-[#EA6C31] mx-5 hover:bg-[#DE5312] font-medium text-sm w-30   text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2"
                onClick={() => {
                  props.removeFromCart(orderedItem);
                  setCounter(0);
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="mt-6 font-medium leading-tight  flex">
            {isAvailable ? (
              <button
                type="button"
                className="bg-[#EA6C31] hover:bg-[#DE5312] text-xl w-80 h-14 text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2"
                onClick={() => props.addToCart(currentId, shownNumber)}
              >
                Add to Cart
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#EA6C31] hover:bg-[#DE5312] text-xl w-80 h-14 text-black focus:outline-none rounded-full  px-5 py-2.5 text-center mr-2"
              >
                Out Of Stock
              </button>
            )}
            <button
              onClick={() => addToFav(currentId)}
              className="btn btn-circle btn-outline my-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={addedToFav ? "#EA6C31" : "none"}
                viewBox="0 0 24 24"
                stroke={addedToFav ? "#EA6C31" : "black"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          {/* <button className="btn bg-[#EA6C31] focus:ring-black focus:ring-4 hover:fill-black hover:bg-[#DE5312] rounded-full">
            Add to Fav List
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:fill-black fill-slate-400 focus:fill-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsItem;
