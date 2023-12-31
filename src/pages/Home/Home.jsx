import React, { useState } from "react";
import "./Home.css";
import VideoSlider from "../../components/videoSlider/VideoSlider";
import TopRatedReview from "../../components/topRatedReview/TopRatedReview";
import BestSeller from "../../components/bestSellerProducts/BestSeller";

function Home() {

  const roomCards = [
    {
      img: "//images.ctfassets.net/n33pk8ulkyi3/7xX6oxvlzrv7OybE8rBXo8/d0b4371a818f1fb670a66e140d6f4026/livingsketch.jpg",
      border: "3px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244) 8px 8px 0px",
      title: "Living Room",
    },
    {
      img: "//images.ctfassets.net/n33pk8ulkyi3/3203Qw23mDxpIYpqIBS95V/23e17074c629e8ecd3cad303a6f1152f/bedroomsketch.jpg",
      border: "3px solid rgb(34, 93, 202)",
      shadowColor: " rgb(231, 203, 67) 8px 8px 0px",
      title: "Bedroom",
    },
    {
      img: "//images.ctfassets.net/n33pk8ulkyi3/cbYQljbtXW7uJudehfsyT/b566e49dc43231b55e44b4424a2645f8/office.jpg",
      border: "3px solid rgb(36, 41, 71)",
      shadowColor: " rgb(162, 212, 197) 8px 8px 0px",
      title: "Home Office",
    },
    {
      img: "//images.ctfassets.net/n33pk8ulkyi3/3kbUnRi1ibVBNyOXLp0Lcn/c2f1579544f07e2fdee1ed9bded9dab4/diningsketch.jpg",
      border: "3px solid rgb(222, 67, 51)",
      shadowColor: "rgb(175, 73, 32) 8px 8px 0px",
      title: "Dining Room",
    },
  ];

  return (
    <>
      {/* videoSlider start */}
      <VideoSlider />

      {/* videoSlider end */}

      {/* RoomCategory section start */}
      <section className="flex flex-col items-center overflow-hidden justify-center   ">
        <h1 className="text-5xl	font-medium mt-12 mb-10 leading-10	">
          Shop by Room
        </h1>
        <div className="flex flex-row flex-wrap gap-x-7 gap-y-5 mb-16 justify-center">
          {roomCards.map((card, index) => (
            <div
              key={index}
              className="room-card "
              style={{ border: card.border, boxShadow: card.shadowColor }}
            >
              <a to="/" className="text-center">
                <div>
                  <div className="">
                    <img className="h-52 object-cover" src={card.img} />
                  </div>
                </div>
                <strong>
                  <p className="my-4 text-lg	">{card.title}</p>
                </strong>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* RoomCategory section end */}

      <section className="flex justify-center items-center text-center	pt-28 px-6 bg-white	 pb-24	">
        <div style={{ maxWidth: "976px" }}>
          <h2 className="p-4 text-4xl	leading-10 font-medium	text-black	">
            <span>“Keeping Furniture in Homes and out of Landfills."</span>
          </h2>
          <h6
            className="	text-center font-normal	 leading-8 text-black	"
            style={{ fontSize: " 25px" }}
          >
            This isn’t just another rental company - We’re elevating the future
            of furniture by replacing the commitment of ownership with a culture
            of sharing in a way that’s curated, convenient, and sustainable.
          </h6>
        </div>
      </section>

      <section className="bg-white ">
        <div className="flex sm:flex-col-reverse lg:flex-row justify-center items-center py-8">
          <div
            className="lg:w-6/12 sm:w-full lg:p-6 sm:p-8 flex lg:justify-center "
            // style={{ paddingLeft: "72px" }}
          >
            <div className="flex flex-col lg:w-8/12  sm:w-full	justify-center items-start ">
              <h2 className="lg:text-4xl sm:text-2xl	font-medium	leading-10	">
                Enjoy a fully furnished space in less than week
              </h2>
              <div className="mt-5 mb-9 sm:text-md	lg:text-lg	text-black		">
                <p>
                  Feather furniture is available to be delivered and assembled
                  in New York City, Los Angeles and San Francisco.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Explore Furniture
              </a>
            </div>
          </div>
          <div className="lg:w-6/12 sm:w-11/12	">
            <img src="https://img.livefeather.com/pages-new/Homepage/section-1-flexibility.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=800&q=80&w=1200" />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="flex sm:flex-col-reverse lg:flex-row-reverse	justify-center items-center py-8">
          <div className="lg:w-6/12 sm:w-full lg:p-6 flex sm:p-8 ">
            <div className="flex flex-col lg:w-8/12  sm:w-full	justify-center items-start ">
              <h2 className="lg:text-4xl	sm:text-2xl font-medium	leading-10	">
                Garage Sale - 35% & Up
              </h2>
              <div className="mt-5 mb-9	lg:text-lg sm:text-md	text-black		">
                <p>
                  Our Garage Sale is open! Savings start at 35% on favorite
                  retired pieces. Find dressers, sofas, decor, and more to make
                  the year one to remember.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Shop Now
              </a>
            </div>
          </div>
          <div className="lg:w-6/12 sm:w-11/12 flex justify-center ">
            <img
              className="object-contain lg:w-3/5	"
              src="https://img.livefeather.com/pages/homepage/garagesale-campaign-20230531.png?auto=compress,format&cs=srgb&dpr=1&fit=max&h=1200&q=80&w=1200"
            />
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="flex  sm:flex-col-reverse lg:flex-row justify-center items-center py-8">
          <div
            className="lg:w-6/12 sm:w-full lg:p-6 sm:p-8 flex lg:justify-center "
            // style={{ paddingLeft: "72px" }}
          >
            <div className="flex flex-col lg:w-8/12  sm:w-full	justify-center items-start ">
              <h2 className="lg:text-4xl sm:text-2xl	font-medium	leading-10	">
                Furniture for business, made simple.
              </h2>
              <div className="mt-5 mb-9	lg:text-lg sm:text-md	text-black		">
                <p>
                  Say goodbye to cost, complexity, and commitment of furniture.
                  Feather makes it easy with affordable rental plans, white
                  glove delivery and best-in-class account service.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                Visit Feather For Business
              </a>
            </div>
          </div>
          <div className="lg:w-6/12 sm:w-11/12">
            <img src="https://img.livefeather.com/pages-new/Homepage/FeatherforBusiness.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=800&q=80&w=1200" />
          </div>
        </div>
      </section>
      <section className="bg-white pb-48 ">
        <div className="flex sm:flex-col-reverse lg:flex-row-reverse	justify-center items-center py-8">
          <div className="lg:w-6/12 sm:w-full lg:p-16 flex sm:p-8 ">
            <div className="flex flex-col lg:w-9/12  sm:w-full	justify-center items-start  ">
              <h2 className="lg:text-4xl	sm:text-2xl font-medium	leading-10		">
                Never assemble furniture again.
              </h2>
              <div className="mt-5 mb-9	lg:text-lg sm:text-md	text-black		">
                <p>
                  We move a lot. There are countless floor plans and roommates
                  (oh, and your evolving tastes) between here and there. With
                  Feather, furnish your space without breaking a sweat or
                  reaching for a screwdriver.
                </p>
              </div>
              <a to="/" className="Btn" href="">
                How Feather Works
              </a>
            </div>
          </div>
          <div className="lg:w-6/12 sm:w-11/12 flex justify-center ">
            <img
              className="object-contain	"
              src="https://img.livefeather.com/pages-new/Homepage/section-2.jpg?auto=compress,format&cs=srgb&dpr=1&fit=max&h=1200&q=80&w=1200"
            />
          </div>
        </div>
      </section>

      {/* Shop our Bestsellers  */}
      <BestSeller/>

      {/* Shop our Bestsellers  end */}

      <div className="grid grid-cols-3 mb-14">
        <div className="col-span-2">
          <img
            src="https://img.livefeather.com/pages-new/Homepage/floyd-homepage-desktop.png?auto=compress,format&cs=srgb&dpr=1&fit=max&q=80"
            alt=""
          />
        </div>
        <div className="rightSide text-white">
          <div>
            <span className="font-bold sides">feather </span>
            <span className="">x</span>
            <span className="font-bold sides"> FLOYD</span>
          </div>
          <div className="forbreak text-center">
            <h1 className=" text-white font-bold p-5">
              Floyd Furniture Meets Feather Flexibility
            </h1>
          </div>
          <button className="sideBtn font-bold py-5 px-10 text-black rounded-full hover:bg-slate-200">
            Explore Floyd Furniture
          </button>
        </div>
      </div>

      {/* reviews section start */}
      <TopRatedReview/>
      {/* reviews section end */}
    </>
  );
}

export default Home;
