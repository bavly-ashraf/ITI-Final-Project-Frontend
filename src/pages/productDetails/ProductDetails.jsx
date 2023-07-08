import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";
import ProductDescription from "../../components/productDescription/ProductDescription";
import axios from "axios";
import ProductReview from "../../components/productReview.jsx/ProductReview";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProductDetails = () => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  let [addedToFav, setAddedToFav] = useState(
    auth?.user?.wishList.includes(id) ? true : false
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
        console.log(response.data.product);
      })
      .catch(() => {
        console.log("error fetching data");
      });
  }, []);

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
              removeFromFavServerSide={removeFromFavServerSide}
              addToFavServerSide={addToFavServerSide}
              addedToFav={addedToFav}
              setAddedToFav={setAddedToFav}
              product={product}
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
