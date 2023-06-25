import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import "./Header.css";
// Initialization for ES Users
import {
  Collapse,
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";

// initTE({ Collapse, Dropdown, Ripple });

function Header() {

  // const [count,setCount] = useState(0);

  // const changeCount = function(){
  //   setCount(count+1);

  // }
  
useEffect(() => {
  initTE({ Collapse, Dropdown, Ripple });
},[] );

  return (
    <header>

      {/* <div className="z-50 navbar fixed">
        <div className="navbar-start ">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              to="home"
              className=" navElements block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </Link>

            <div className="dropdown justify-around">
              <li className="">
                <Link
                  to="#"
                  className=" navElements block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>

              <ul
                tabIndex="0"
                className="productsList my-4 p-10 dropdown-content flex"
              >
                <div className="flex-1 mr-4">
                  <li className="part1">
                    <div className="categories">
                      <h1 className="">CATEGORIES</h1>
                    </div>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Living Room</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Bedroom</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Dining</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Home office</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Lightning</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Outdoor</span>
                    </Link>
                  </li>
                </div>

                <div className="flex-1 mr-4">
                  <li className="part1">
                    <div className="categories">
                      <h1 className="">ITEM TYPE</h1>
                    </div>
                    <Link to="productListing" className="block my-5">
                      <span className="list">
                        {" "}
                        Sofas, Sectionals, & Sleepers
                      </span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Chairs</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Coffee Tables</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Side Tables</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">
                        {" "}
                        Ottomans, Stools, & Benches{" "}
                      </span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Beds & Mattresses</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Nightstands & Dressers </span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Dining Tables</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">
                        Dining Chairs & Counter Stools
                      </span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Cabinets & Consoles</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">
                        Desks, Desk Chairs, & Bookshelves
                      </span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Rugs & Artwork</span>
                    </Link>
                  </li>
                </div>

                <div className="flex-1">
                  <li className="part">
                    <div className="categories">
                      <h1 className="">PACKAGES</h1>
                    </div>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Industrial</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Eclectic</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Art Deco</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Scandinavian</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Rustic</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Neutral</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Monochrome</span>
                    </Link>
                    <Link to="productListing" className="block my-5">
                      <span className="list">Traditional</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <div className="dropdown">
              <li className="">
                <Link
                  to="#"
                  className=" navElements block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Account
                </Link>
              </li>

              <ul
                tabIndex="0"
                className="account menu menu-lg dropdown-content my-4"
              >
                <li>
                  <Link to="login">Login</Link>
                  <Link to="signup">
                    Signup <span className="badge bg-orange-500">New</span>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        <div className="navbar-center hover:cursor-pointer">
          <div className="flex-1">
            <p className="font-bold text-3xl ...">FURNITURE</p>
          </div>
        </div>

        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-orange-500">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-1 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body w-100">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-orange-400">Subtotal: $999</span>
                  <div className="card-actions">
                    <Link to="CartItem">
                      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="profile menu menu-lg dropdown-content my-2"
              >
                <li>
                  <Link>Username</Link>
                  <Link to="orderStatus">Order status</Link>
                  <Link to="favouriteList" className="icon">
                    Favourites
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

<nav
  className="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
  data-te-navbar-ref>
  <div className="px-6">
    <button
      className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentY"
      aria-controls="navbarSupportedContentY"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="[&>svg]:w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
    </button>
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContentY"
      data-te-collapse-item>
      <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
        <li data-te-nav-item-ref>
          <a
            className="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#!"
            data-te-ripple-init
            data-te-ripple-color="light"
            >Regular link</a
          >
        </li>
        <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
          <a
            className="flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#"
            data-te-ripple-init
            data-te-ripple-color="light"
            type="button"
            id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-nav-link-ref
            >Mega menu
            <span className="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </a>
          <div
            className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonY"
            data-te-dropdown-menu-ref>
            <div className="px-6 py-5 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Lorem ipsum
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Dolor sit</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Amet consectetur</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Adipisicing elit</a
                  >
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Explit voluptas
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Perspiciatis quo</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Laudantium maiores</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Provident dolor</a
                  >
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Iste quaerato
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cras justo odio</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Est iure</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Praesentium</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Laboriosam</a
                  >
                </div>
                <div>
                  <p
                    className="block w-full border-b border-neutral-200 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-neutral-500 dark:text-white">
                    Cras justo odio
                  </p>
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Saepe</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Vel alias</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Sunt doloribus</a
                  >
                  <a
                    href="#!"
                    aria-current="true"
                    className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >Cum dolores</a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;
