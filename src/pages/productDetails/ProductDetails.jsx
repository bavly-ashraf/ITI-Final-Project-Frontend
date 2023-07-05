import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";
import ProductDescription from "../../components/productDescription/ProductDescription";
import axios from "axios";
import { useEffect } from "react";


const ProductDetails = () => {

  let [product,setProduct]=useState(0);

  let productId="64a57959ed341c0dc39c6286";

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/id/${productId}`
      );
      // Handle the response data
      // product = response.data.product;
      setProduct(response.data.product)
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <>
      {product ? (
        <div className="md:flex-col pt-24">
          <div className="flex justify-start bg-[#FBF8F5] lg:flex-row md:flex-row sm:flex-col mb-10">
            <ImageSlider product={product} />
            <ProductDetailsItem product={product} className="col-span-4" />
          </div>
          <div>
            <ProductDescription product={product} />
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
