import React, { useEffect, useState } from "react";
import { Carousel, Ripple, initTE } from "tw-elements";

export default function VideoSlider() {
  useEffect(() => {
    initTE({ Carousel, Ripple });
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptionsFull"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active
          >
            <video className="" playsInline autoPlay muted loop>
              <source
                className=""
                src="src/assets/videos/pexels-artem-podrez-4492794-3840x2160-50fps.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
             
            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                  We are <span style={{color:"rgb(233, 103, 43)"}}> creative</span> 
                  </h2>
                  <a
                    type="button"
                    className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <video className="" playsInline autoPlay muted loop>
              <source
                className=""
                src="src/assets/videos/pexels-rdne-stock-project-8580866-1920x1080-30fps.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"

            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                  We are <span style={{color:"rgb(233, 103, 43)"}}> smart</span> 
                  </h2>
                  <a
                    type="button"
                    className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <video className="" playsInline autoPlay muted loop>
              <source
                className=""
                src="src/assets/videos/pexels-taryn-elliott-3770034-1920x1080-25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"

            >
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                  We are <span style={{color:"rgb(233, 103, 43)"}}> amazing</span> 
                  </h2>
                  <a
                    type="button"
                    className="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptionsFull"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptionsFull"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </>
  );
}
