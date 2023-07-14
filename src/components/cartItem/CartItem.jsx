/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Link, useNavigate } from "react-router-dom";
const CHECKOUT_URL = "/orderedItems";
import { AuthContext } from "../../context/AuthProvider";
import CartItemList from "../cartItemList/CartItemList";
import { toast } from "react-toastify";

const CartItem = (props) => {
  let navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  // const [item, setitem] = useState([]);
  const item = props.cartItems;

  // useEffect(() => {

  //   axios.get(`http://localhost:3000/orderedItems/`, { headers: { "Authorization": auth?.accessToken } }).then((response) => {

  //     setitem(response.data.orderItem);
  //     console.log(response.data.orderItem)
  //   });

  // }, []);

  const totalPrice = item.reduce(
    (acc, cur) => acc + cur.productId.price * cur.quantity,
    0
  );

  const handleCheckout = () => {
    if (totalPrice !== 0) {
      navigate("/checkout");
    } else {
      toast.error("Cannot checkout with a subtotal of zero.");
    }
  };

  // const DeleteItem = async (itemId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:3000/orderedItems/${itemId}`, { headers: { "Authorization": auth?.accessToken } });
  //     console.log(response.data);

  //     setitem(item.filter((item) => item._id !== itemId));
  //     toast.success("Item removed from cart successfully");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to remove item from cart");
  //   }
  // }
  return (
    <div>
      <div className="p-40">
        <section className="flex flex-wrap">
          {/* header */}
          <div className="w-full flex justify-between">
            <h1 className="font-extrabold text-3xl text-project-main-color">
              YOUR BAG
            </h1>
          </div>

          <section className="w-full flex flex-wrap justify-around mt-10">
            <div className="block">
              {item.length > 0 ? (
                item.map((items, idx) => (
                  <CartItemList
                    className="my-10"
                    index={idx}
                    DeleteItem={props.removeFromCart}
                    product={items}
                    key={items._id}
                  />
                ))
              ) : (
                <div className="text-center w-96 mt-10">
                  <p className="animate-pulse custom-font-bold text-2xl">
                    Your cart is feeling a bit light. Keep browsing to find the
                    perfect furniture pieces to fill it up!
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <section className="p-3 bg-orange-100 h-52">
              <h2 className="custom-font-bold"> Order Summary</h2>
              <div className="flex justify-between my-5 pb-5 border-b-2 border-gray-400">
                <p className="custom-font-bold">Subtotal:</p>
                <p className="price custom-font-bold">{totalPrice} EGP</p>
              </div>
              {/* <div className="flex justify-center py-5 ">
                <button
                  onClick={handleCheckout}
                  className="w-80 h-10 text-lg bg-slate-300 hover:bg-slate-400 rounded-full"
                >
                  Checkout
                </button>
              </div> */}
              <div>
                {/* Conditionally render the Checkout button */}
                {auth?.user ? (
                  <div className="flex justify-center py-5">
                    <button
                      onClick={handleCheckout}
                      className="w-80 h-10 text-lg bg-slate-300 hover:bg-slate-400 rounded-full"
                    >
                      Checkout
                    </button>
                  </div>
                ) : (
                  // Render the link to the login component
                  <Link to="/login">
                    <div className="flex justify-center py-5">
                      <button className="w-80 h-10 text-lg bg-slate-300 hover:bg-slate-400 rounded-full">
                        Login to Checkout
                      </button>
                    </div>
                  </Link>
                )}
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default CartItem;
