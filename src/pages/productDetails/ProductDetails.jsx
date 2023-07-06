import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";
import ProductDescription from "../../components/productDescription/ProductDescription";
import axios from "axios";
import { useEffect } from "react";
import ProductReview from "../../components/productReview.jsx/ProductReview";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
 const{id}= useParams()
 console.log(id);
  const [product, setProduct] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/product/${id}`)
      .then((response) => {
        console.log(response.data.product);
        setProduct(response.data.product);
      })
      .catch(() => {
        console.log("error fetching data");
      });
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
          <div>
         <ProductReview reviews={product.reviews}/>
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
