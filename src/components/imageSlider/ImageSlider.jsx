import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(
    "src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg"
  );
  const [previous, setPrevious] = useState(
    "src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg"
  );
  let [images, changeImages] = useState([
    {
      id: 1,
      className:
        "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white",
      src: "src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg",
      dotClass:
        "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full",
    },
    {
      id: 2,
      className:
        "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16",
      src: "src/assets/Images/ImageSlider/avif/gea-cof-05_detail_2_2x3.webp",
      dotClass:
        "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full",
    },
    {
      id: 3,
      className:
        "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16",
      src: "src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_675457.webp",
      dotClass:
        "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full",
    },
    {
      id: 4,
      className:
        "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16",
      src: "src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_c89dc2.webp",
      dotClass:
        "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full",
    },
    {
      id: 5,
      className:
        "border cursor-pointer lg:col-span-1 md:col-start-4 md:col-span-2 shadow rounded-full h-16 w-16",
      src: "src/assets/Images/ImageSlider/avif/gea-cof-05_silo_5_2x3.webp",
      dotClass:
        "dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full",
    },
  ]);

  //////////////////functions//////////////////////
  function handleSlider(e) {
    setPrevious(current);
    setCurrent(e.target.src);
  }
  function sliderClick(id) {
    setPrevious(current);
    setCurrent(images[id - 1].src);
    // console.log(images[id-1].dotClass);
  }
  // function changeBorder(id) {
  //     images.forEach((image) =>
  //     {
  //         if (image.id == id) {
  //             changeImages((prevImages) => {
  //                 const newImages = [...prevImages]; // Create a new array
  //                 newImages[id - 1] = { ...prevImages[id - 1] };
  //                 newImages[id - 1].className =
  //                 "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white";
  //                 newImages[id-1].dotClass='dot border-gray-800 border-2 w-2 h-2 cursor-pointer rounded-full bg-gray-400'
  //                 console.log(newImages[id-1].dotClass);
  //                 return newImages;
  //             });
  //         }
  //         else
  //         {
  //             changeImages((prevImages) => {
  //                 const newImages = [...prevImages]; // Create a new array
  //                 newImages[image.id - 1] = { ...prevImages[image.id - 1] };
  //                 newImages[image.id - 1].className =
  //                 "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16";
  //                 newImages[id-1].dotClass='dot border-gray-400 border-2 w-2 h-2 cursor-pointer rounded-full'
  //                 console.log(newImages[id-1].dotClass);
  //                 return newImages;
  //             });
  //         }
  //         if (image.id == 5) {
  //             changeImages((prevImages) => {
  //                 const newImages = [...prevImages]; // Create a new array
  //                 newImages[id - 1] = { ...prevImages[id - 1] };
  //                 newImages[id - 1].className =
  //                 "border cursor-pointer lg:col-span-1 md:col-start-4 md:col-span-2 shadow rounded-full h-16 w-16 outline outline-2 outline-black cursor-pointer border-4 border-white";
  //                 newImages[id-1].dotClass='dot border-gray-800 border-2 w-2 h-2 cursor-pointer rounded-full bg-gray-400'
  //                 return newImages;
  //             });
  //         }
  //     });
  //     // console.log(images);
  // }
  function changeDot(id) {
    changeImages((prevImages) => {
      const newImages = [...prevImages]; // Create a new array
      newImages.forEach((image, index) => {
        newImages[index] = { ...prevImages[index] };
      });
      newImages.forEach((image) => {
        image.className =
          "border cursor-pointer lg:col-span-1 md:col-span-2 shadow rounded-full h-16 w-16";
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
    <>
      <div className="flex-col justify-between md:w-3/5 sm:w-full align-middle border border-gray-900">
        <div className=" border border-gray-900 mb-4 md:mb-10">
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
        <div className="md:flex justify-center hidden  h-16 border border-gray-900 sm:bg-slate-500  md:bg-slate-200 lg:bg-red-200 ">
          <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-8">
            {images.map((image) => (
              <img
                key={image.id}
                id={image.id}
                src={image.src}
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
    </>
  );
};

export default ImageSlider;
