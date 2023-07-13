
import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link, useNavigate } from "react-router-dom";

import "./Checkout.css"
import axios from "../../api/axios";
import Joi from "joi";
const DATA_URL = "/orders"
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";


export default function placeOrder(props) {

    const { auth } = useContext(AuthContext)
    let navigate = useNavigate()

    const [error, setError] = useState('')
    // const [isLoading, setLoading] = useState(false)
    const [errorList, setErrorList] = useState([])
    const [userdata, setuserData] = useState({
        address: "",
        city: "",
        country: "",
        zip: null,
        phone: null
    })

    // const [item, setitem] = useState([]);
    const item = props.cartItems;

    // useEffect(() => {

    //     axios.get(`http://localhost:3000/orderedItems/`, { headers: { "Authorization": auth?.accessToken } }).then((response) => {

    //         setitem(response.data.orderItem);
    //         console.log(response.data.orderItem)
    //     });

    // }, []);

    const totalPrice = item.reduce((acc, cur) => acc + cur.productId.price * cur.quantity, 0);

    const checkEvent = (eventInfo) => {
        let userData = { ...userdata };
        userData[eventInfo.target.name] = eventInfo.target.value;
        setuserData(userData)
        console.log(userData)

    };

    async function sendUserDataToApi() {
        let { data } = await axios.post(DATA_URL, userdata, { headers: { "Authorization": auth?.accessToken } })
        if (data.message == 'success') {
            props.removeAllCartItems([]);
            navigate("/ProductListing");
            // setLoading(false)

        }
        else {
            setError(data.message)
            console.log(data.message)

            // setLoading(false)
        }
        console.log(data)
    }

    function submitUserDataForm(e) {
        e.preventDefault()
        // setLoading(true)
        let validation = validateForm()
        console.log(validation)
        if (validation.error) {
            // setLoading(false)
            setErrorList(validation.error.details)
        }
        else {
            if(auth.roles == "admin"){
                toast.error("Only users can create orders.")
            }
            else{
                sendUserDataToApi()
            }
        }
    }

    function validateForm() {
        let schema = Joi.object({
            address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            zip: Joi.number().required(),
            phone: Joi.number().required(),
        })
        console.log(schema.validate(userdata, { abortEarly: false }))
        return schema.validate(userdata, { abortEarly: false });
    }

    return (
        <>
            {error.length > 0 ? <div className=" my-2">{error}</div> : ''}
            <div className="m-auto block max-w-md rounded-lg bg-[#FBF8F5] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form onSubmit={submitUserDataForm}>

                    {errorList.map((err, index) => {
                        console.log(err)
                        if (err.context.label === 'address') {
                            return <div key={index} className=" my-2  border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">invalid address</div>
                        }
                        else if (err.context.label === 'city') {
                            return <div key={index} className=" my-2  border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">invalid city</div>
                        }
                        else if (err.context.label === 'country') {
                            return <div key={index} className=" my-2  border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">invalid country</div>
                        }
                        else if (err.context.label === 'zip') {
                            return <div key={index} className=" my-2  border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">invalid zip code and must be a number</div>
                        }
                        else if (err.context.label === 'phone') {
                            return <div key={index} className=" my-2  border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">invalid phone and must be a number</div>
                        }
                        {
                            return <div key={index} className=" border rounded-lg border-red-600 mb-5 text-danger-600 text-center  bg-danger-200">{err.message}</div>
                        }
                    })}
                    <div className="relative mb-6" data-te-input-wrapper-init>

                        <input onChange={checkEvent}
                            type="text"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput7"
                            name="address"
                            placeholder="address" />
                        <label
                            htmlFor="exampleInput7"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                            Address
                        </label>
                    </div>


                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input onChange={checkEvent}
                            type="text"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            name="city"
                            placeholder="city" />
                        <label
                            htmlFor="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >City
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input onChange={checkEvent}
                            type="text"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            name="country"
                            placeholder="country" />
                        <label
                            htmlFor="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Country
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input onChange={checkEvent}
                            type="text"
                            className=" peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            name="zip"
                            placeholder="zip" />
                        <label
                            htmlFor="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Zip
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input onChange={checkEvent}
                            type="text"
                            name="phone"
                            className="peer block min-h-[auto] w-full rounded border-0 focus:border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput8"
                            placeholder="phone"
                        />
                        <label
                            htmlFor="exampleInput8"
                            className="pointer-events-none absolute left-3 top-0 mb-0 bg-[#FBF8F5] max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-project-main-color peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                            Phone
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <div>Total Price:</div>
                        <p className='text text-xl font-bold py-2'>{totalPrice} {"EGP"}</p>

                    </div>

                    <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">  </div>


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

}