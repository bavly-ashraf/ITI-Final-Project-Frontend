import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="navbar ">
        <div className="navbar-start ">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              to="#"
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
                className="productsList my-6 p-10 dropdown-content flex"
              >
                <div className="flex-1 mr-4">
                  <li className="part1">
                    <div className="categories">
                      <h1 className="">CATEGORIES</h1>
                    </div>
                    <Link className="list block my-5">Living Room</Link>
                    <Link className="list block my-5">Bedroom</Link>
                    <Link className="list block my-5">Dining</Link>
                    <Link className="list block my-5">Home office</Link>
                    <Link className="list block my-5">Lightning</Link>
                    <Link className="list block my-5">Outdoor</Link>
                  </li>
                </div>

                <div className="flex-1 mr-4">
                  <li className="part1">
                    <div className="categories">
                      <h1 className="">ITEM TYPE</h1>
                    </div>
                    <Link className="list block my-5">
                      Sofas, Sectionals, & Sleepers
                    </Link>
                    <Link className="list block my-5">Chairs</Link>
                    <Link className="list block my-5">Coffee Tables</Link>
                    <Link className="list block my-5">Side Tables</Link>
                    <Link className="list block my-5">
                      Ottomans, Stools, & Benches
                    </Link>
                    <Link className="list block my-5">Beds & Mattresses</Link>
                    <Link className="list block my-5">
                      Nightstands & Dressers
                    </Link>
                    <Link className="list block my-5">Dining Tables</Link>
                    <Link className="list block my-5">
                      Dining Chairs & Counter Stools
                    </Link>
                    <Link className="list block my-5">Cabinets & Consoles</Link>
                    <Link className="list block my-5">
                      Desks, Desk Chairs, & Bookshelves
                    </Link>
                    <Link className="list block my-5">Rugs & Artwork </Link>
                  </li>
                </div>

                <div className="flex-1">
                  <li className="part">
                    <div className="categories">
                      <h1 className="">PACKAGES</h1>
                    </div>
                    <Link className="list block my-5">Industrial</Link>
                    <Link className="list block my-5">Eclectic</Link>
                    <Link className="list block my-5">Art Deco</Link>
                    <Link className="list block my-5">Scandinavian</Link>
                    <Link className="list block my-5">Rustic</Link>
                    <Link className="list block my-5">Neutral</Link>
                    <Link className="list block my-5">Monochrome</Link>
                    <Link className="list block my-5">Traditional</Link>
                  </li>
                </div>
              </ul>
            </div>

            <div className="dropdown">
              <li className="">
                <Link
                  href="#"
                  className=" navElements block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Account
                </Link>
              </li>

              <ul
                tabIndex="0"
                className="account menu menu-lg dropdown-content my-6"
              >
                <li>
                  <h3>Login</h3>
                  <h3>
                    Signup
                    <span className="badge bg-orange-500">New</span>
                  </h3>
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
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-orange-400">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full btn-block">
                      View cart
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_4pCXJ2F5fzF3a9HjL-Zpy1WUz_NcgzVjQ&usqp=CAU" />
                </div>
              </label>

              <ul
                tabIndex="0"
                className="profile menu menu-lg dropdown-content my-4"
              >
                <li>
                  <Link>Order status</Link>
                  <Link className="icon">
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
      </div>
    </header>
  );
}

export default Header;
