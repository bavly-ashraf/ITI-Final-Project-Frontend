import React from "react";
import "./CartItemList.css";
import { Link } from "react-router-dom";

const CartItemList = ({ product, DeleteItem }) => {
  console.log(product);
  return (
    <>
      <section className="w-full flex justify-between shadow-lg shadow-bg-slate-200-500/50 my-4">
        {/* list item card */}
        <figure className="w-40 h-20">
          <img
            className="w-40 h-20 "
            src={product.productId.photo_url[0]}
            alt="picture"
          />
        </figure>

        <div className="px-3 ">
          <h2 className="custom-font-bold text-xl">{product.productId.name}</h2>
          <div className="custom-font-bold text-xl">
            {product.productId.price * product.quantity}{" "}
            <span className="text-project-main-color">{"EGP"}</span>
          </div>
        </div>

        <div className="px-3  text-center">
          <h4 className="px-3 text-project-main-color">{product.quantity}</h4>
        </div>

        {/* deleting items */}
        <div className="px-3  ">
          <button onClick={() => DeleteItem(product._id)}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hover:fill-red-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};
export default CartItemList;
