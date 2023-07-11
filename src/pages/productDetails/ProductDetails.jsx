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

const ProductDetails = () => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  let [inCart, setInCart] = useState(false);
  let [orderedItem, setOrderedItem] = useState({});
  let [addedToFav, setAddedToFav] = useState(
    auth?.user?.wishList.includes(id) ? true : false
  );

  useEffect(() => {
    console.log("use effect...");
    getProduct(id);
    ifInCart(id);
  }, []);

  const notify = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const errorMsg = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

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

  const ifInCart = async (id) => {
    const response = await axios.get("http://localhost:3000/orderedItems", {
      headers: { Authorization: auth.accessToken },
    });
    console.log(response.data.orderItem);
    let itemsArray = response.data.orderItem;
    setInCart(
      itemsArray.some((item) => {
        setOrderedItem(item.productId._id == id ? item._id : {});
        return item.productId._id == id;
      })
        ? true
        : false
    );
  };

  const removeFromCart = async (orderedItem) => {
    try {
      console.log(orderedItem);
      const token = auth.accessToken;
      await axios.delete(`http://localhost:3000/orderedItems/${orderedItem}`, {
        headers: { Authorization: auth.accessToken },
      });
      setInCart(false);
      notify("Item Deleted Successfully!");
    } catch (err) {
      errorMsg(err.message);
    }
  };

  const addToCart = async (id, no_of_items) => {
    try {
      if (no_of_items > 0) {
        const response = await axios.post(
          `http://localhost:3000/orderedItems/`,
          {
            productId: id,
            quantity: no_of_items,
          },
          {
            headers: { Authorization: auth.accessToken },
          }
        );
        setInCart(true);
        setOrderedItem(response.data.orderItem._id);
        console.log(response);
        notify("Item Successfully Added To Cart");
      } else {
        errorMsg("you have to add at least 1 item to the cart");
      }
    } catch (error) {
      console.error(error);
      errorMsg("Items could not be added to cart sorry");
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
        <div className="md:flex-col pt-24">
          <div className="flex justify-start bg-[#FBF8F5] lg:flex-row md:flex-row sm:flex-col mb-10">
            <ImageSlider product={product} />
            <ProductDetailsItem
              id={id}
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
          <div>
            <ProductDescription product={product} />
          </div>
          <div>
            <ProductReview reviews={product.reviews} />
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
