import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";

const ProductDetails = () => {
  return (
    <div className="flex justify-start bg-[#FBF8F5]">
      <ImageSlider className="col-span-8 border border-red-600" />
      <ProductDetailsItem className="col-span-4" />
    </div>
  );
};

export default ProductDetails;
