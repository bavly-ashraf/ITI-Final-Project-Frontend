/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";
import ProductDescription from "../../components/productDescription/ProductDescription";
import axios from "axios";
import ProductReview from "../../components/productReview.jsx/ProductReview";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = (props) => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  let [addedToFav, setAddedToFav] = useState(
    auth?.user?.wishList.some((item) => item._id == id)
  );
  let cartItems = props.cartItems;
  let addToCart = props.addToCart;
  let inCart = props.inCart;
  let setInCart = props.setInCart;
  let orderedItem = props.orderedItem;
  let removeFromCart = props.removeFromCart;
  let setOrderedItem = props.setOrderedItem;
  useEffect(() => {
    getProduct(id);
    ifInCart(id, cartItems);
  }, [cartItems, inCart, orderedItem]);

  const getProduct = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/product/${id}`,
        {
          headers: { Authorization: auth.accessToken },
        }
      );
      setProduct(response.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  const ifInCart = async (id, itemsArray) => {
    for (let i = 0; i < itemsArray.length; i++) {
      if (itemsArray[i].productId._id == id) {
        // setOrderedItem(itemsArray[i]._id)
        console.log("from inside if conidtion.......");
        setInCart(true);
        setOrderedItem(itemsArray[i]._id);
        console.log(itemsArray[i]._id);
      }
    }
  };

  const addToFavServerSide = async (id) => {
    try {
      console.log("adding to fav");
      console.log(auth.accessToken);
      const response = await axios.patch(
        `http://localhost:3000/products/fav/${id}`,
        {
          status: "confirmed",
        },
        {
          headers: { Authorization: auth.accessToken },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavServerSide = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/products/unfav/${id}`,
        {
          status: "confirmed",
        },
        {
          headers: { Authorization: auth.accessToken },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {product ? (
        <div className="md:flex-col sm:flex-col pt-18">
          <div className="flex flex-col justify-start bg-[#FBF8F5] lg:flex-row md:flex-row sm:flex-col mb-10">
            <ImageSlider product={product} />
            <ProductDetailsItem
              id={id}
              cartItems={props.cartItems}
              addToCart={addToCart}
              removeFromFavServerSide={removeFromFavServerSide}
              addToFavServerSide={addToFavServerSide}
              addedToFav={addedToFav}
              setAddedToFav={setAddedToFav}
              product={product}
              inCart={inCart}
              setInCart={setInCart}
              removeFromCart={removeFromCart}
              orderedItem={orderedItem}
              className="col-span-4"
            />
          </div>
          <div >
            <ProductDescription product={product} />
          </div>
          <div>
            <ProductReview reviews={product.reviews.slice().reverse()} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center align-middle h-screen w-full">
          <div className="loading loading-lg loading-spinner text-[#E9672B] "></div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
