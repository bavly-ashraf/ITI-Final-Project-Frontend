/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";

const ProductDescription = (props) => {
  let description = props.product.details.description;
  let photo_url = props.product.details.details_images;
  let height = props.product.details.dimensions.height;
  let width = props.product.details.dimensions.width;
  let depth = props.product.details.dimensions.depth;
  return (
    <div className=" bg-[#F3F0EC] px-11 border border-transparent">
      <div className="mt-10 mb-20">
        <div className="flex flex-col justify-center justify-items-center mt-28 mb-20">
          <h1 className="mb-2 text-center text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Product Details
          </h1>
          <p className="tracking-wide mb-2 text-center text-lg mt-10 lg:mx-36 md:mx-16 leading-relaxed  text-neutral-800 dark:text-neutral-50">
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-1 md:grid-cols-1">
          <div className="p-6 border rounded-lg">
            <div className="flex justify-between mt-4 whitespace-pre">
              <div className="text-center text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Dimensions{" "}
              </div>
              <div className="">(inches)</div>
            </div>
            <div className="flex justify-between  mt-4 whitespace-pre">
              <div className="text-center text-base  leading-tight text-neutral-800 dark:text-neutral-50">
                Height
              </div>
              <div>{height}&quot;</div>
            </div>
            <div className="flex justify-between  mt-4 whitespace-pre">
              <div className="text-center text-base  leading-tight text-neutral-800 dark:text-neutral-50">
                Width
              </div>
              <div>{width}&quot;</div>
            </div>
            <div className="flex justify-between  mt-4 whitespace-pre">
              <div className="text-center text-base  leading-tight text-neutral-800 dark:text-neutral-50">
                Depth
              </div>
              <div>{depth}&quot;</div>
            </div>
          </div>
          <div className="lg:col-span-2  ">
            <img src={photo_url[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
