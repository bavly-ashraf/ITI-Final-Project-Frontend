/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./checkout.css"

const CheckOut = () => {
    return (
        <>

            <div className="m-auto block max-w-md rounded-lg bg-[#FBF8F5] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form>

                    <div className="relative mb-6" data-te-input-wrapper-init>

                        <input
                            type="text"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            pattern="^[a-zA-Z]+$"
                            placeholder="Address" />
                        <label
                            for="exampleInput7"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                            Address
                        </label>
                    </div>


                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            pattern="^[a-zA-Z]+$"
                            placeholder="City" />
                        <label
                            for="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >City
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            pattern="^[a-zA-Z]+$"
                            placeholder="Country" />
                        <label
                            for="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Country
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            pattern="\d+"
                            placeholder="zip" />
                        <label
                            for="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >zip
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            pattern="\d+"
                            className="peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            placeholder="Phone"
                        />
                        <label
                            for="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                            Phone
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <div>Total Price:</div>
                        <p className='text text-xl font-bold py-2'>{"EGP"}</p>

                    </div>

                    <div
                        className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">

                    </div>


                    <button
                        type="submit"
                        className="hover:animate-bounce bg-project-main-color dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Order
                    </button>
                </form>
            </div>


        </>
    );
};

export default CheckOut;