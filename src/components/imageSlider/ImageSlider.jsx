/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ImageSlider = (props) => {
  
  let photo_url = props.product.photo_url;
  const [current, setCurrent] = useState(photo_url[0]);
  const [previous, setPrevious] = useState(photo_url[0]);
 
  let [images, changeImages] = useState(photo_url.map((product,index)=>{
    let obj={
      id:index+1,
      className: index==0 ? "border  cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white" :"border hover:border-gray-400 cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16",
      dotClass : index ==0 ? "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full bg-gray-400" : "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full"
    }
    return obj;
  }));

  //////////////////functions//////////////////////
  function handleSlider(e) {
    setPrevious(current);
    setCurrent(photo_url[e.target.id - 1]);
  }
  function sliderClick(e) {
    setPrevious(current);
    setCurrent(photo_url[e - 1]);
  }
  function changeDot(id) {
    changeImages((prevImages) => {
      const newImages = [...prevImages]; // Create a new array
      newImages.forEach((image, index) => {
        newImages[index] = { ...prevImages[index] };
      });
      newImages.forEach((image) => {
        image.className =
          "border hover:border-gray-400 hover:border-3 cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16";
        image.dotClass =
          "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full";
      });
      const index = newImages.findIndex((image) => image.id === id);
      if (id == 5) {
        newImages[index].className =
          "border cursor-pointer lg:col-span-1 md:col-start-4 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white";
        newImages[index].dotClass =
          "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full bg-gray-400";
      } else {
        newImages[index].className =
          "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white";
        newImages[index].dotClass =
          "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full bg-gray-400";
      }
      return newImages;
    });
  }
  function handleMouseOut() {
    setCurrent(previous);
  }

  //////////////////JSX//////////////////////
  return (
    <div className="flex-col justify-between md:w-3/5 sm:w-full align-middle ">
      <div className=" mb-4 md:mb-10">
        <img className=" mx-auto" src={current} />
      </div>
      <div className="flex md:hidden justify-center items-center space-x-5">
        {images.map((image) => (
          <div
            onClick={() => {
              sliderClick(image.id);
              changeDot(image.id);
            }}
            key={image.id}
            id={image.id}
            className={image.dotClass}
          ></div>
        ))}
      </div>
      <div className="md:flex justify-center  hidden  h-16 ">
        <div className="  flex justify-center gap-4 ">
          {images.map((image) => (
            <img
              key={image.id}
              id={image.id}
              src={photo_url[image.id - 1]}
              className={image.className}
              onMouseLeave={handleMouseOut}
              onMouseEnter={handleSlider}
              onClick={(e) => {
                handleSlider(e);
                changeDot(image.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
