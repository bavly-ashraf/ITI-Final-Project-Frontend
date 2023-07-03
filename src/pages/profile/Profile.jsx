import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import "./Profile.css";
// import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
const LOGIN_URL = "/users/login";
const PROFILE_URL = "/users/profile";

const schema = Joi.object({
  username: Joi.string().required().label("Username"),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,}$"))
    .required()
    .label("Password"),
  address: Joi.object({
    apartment: Joi.string().required().label("apartment"),
    floor: Joi.string().allow("").label("Floor"),
    buildingNo: Joi.string().allow("").label("Building Number"),
    street: Joi.string().allow("").label("Street"),
    zip: Joi.string().allow("").label("ZIP"),
    city: Joi.string().allow("").label("City"),
    country: Joi.string().allow("").label("Country"),
  }),
  phone: Joi.string().allow("").label("Phone"),
});

function Profile() {
  const [validationErrors, setValidationErrors] = useState({});
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({}); //new

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const { setAuth } = useAuth();

  const fetchUserProfile = async () => {
    try {
      console.log("Fetching user profile...");
      const response = await axios.get(PROFILE_URL);

      console.log("User profile:", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  ////////
  const onSubmit = async (data) => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.key] = detail.message;
      });
      setValidationErrors(validationErrors);
    } else {
      try {
        console.log("Sending login request...");
        const response = await axios.post(LOGIN_URL, data);

        console.log("Login successful:", response.data, response.data.message);
        // const { user, token } = response.data;
        // Store the user and token in local storage
        // localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem("token", token);
        // sessionStorage.setItem("token", response.data.token);
        // const roles = response?.data?.roles;

        navigate("/"); // Programmatically navigate to the login page

        setValidationErrors({});
        // Do something with the logged-in user and token (e.g., store in state or local storage)
      } catch (error) {
        // console.error("An error occurred:", error);
        // if (error.response && error.response.data) {
        //   setValidationErrors({ error: error.response.data.error });
        console.error("An error occurred:", error);
        if (error.response && error.response.data) {
          // setValidationErrors({ error: error.response.data.message });
          setValidationErrors({
            email: "   ",
            password: error.response.data.message,
          });
          console.log(error.response.data.message);
          console.log(error.response);
          console.log(error.response);
        }
      }
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900"
      style={{ backgroundColor: "#fbf8f5" }}
    >
      <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-bold  text-gray-900 dark:text-black"
        >
          <p> Sign in to your Account</p>
        </a>

        <div
          style={{ backgroundColor: "#fbf8f5" }}
          className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Sign in to your account
            </h1> */}
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div
                className={`relative border-b-2 ${
                  validationErrors.email ? "border-red-500" : "border-zinc-950"
                }`}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={register}
                  className={`active:bg-transparent focus:ring-0 peer h-10 w-full border-b-2 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none mr-3 py-1 px-2 leading-tight focus:outline-none  ${
                    validationErrors.email
                      ? "border-red-500  text-red-500 "
                      : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  placeholder=" "
                  required
                  {...register("email")}
                />
                <label
                  htmlFor="email"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.email ? "text-red-500" : ""
                  }`}
                >
                  Your email
                </label>
              </div>
              {validationErrors.email && (
                <p className="text-red-500 text-sm">{validationErrors.email}</p>
              )}
              <div
                className={`relative border-b-2 ${
                  validationErrors.password
                    ? "border-red-500"
                    : "border-zinc-950"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  // type="password"
                  name="password"
                  id="password"
                  ref={register}
                  placeholder=" "
                  className={`focus:ring-0 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none  mr-3 py-1 px-2 leading-tight focus:outline-none   ${
                    validationErrors.password ? "border-blue-500" : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  required
                  {...register("password")}
                />{" "}
                <label
                  htmlFor="password"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.password ? "text-red-500" : ""
                  }`}
                >
                  Password
                </label>
                <span
                  onClick={togglePasswordVisibility}
                  className="password-toggle-icon absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5 text-stone-500" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-stone-500" />
                  )}
                </span>
              </div>
              {validationErrors.password && (
                <p className="text-red-500 text-sm">
                  {validationErrors.password}
                </p>
              )}
              /////////////////////////
              <div
                className={`relative border-b-2 ${
                  validationErrors.username
                    ? "border-red-500"
                    : "border-zinc-950"
                }`}
              >
                <input
                  type="text"
                  name="username"
                  id="username"
                  ref={register}
                  className={`active:bg-transparent focus:ring-0 peer h-10 w-full border-b-2 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none mr-3 py-1 px-2 leading-tight focus:outline-none  ${
                    validationErrors.username
                      ? "border-red-500  text-red-500 "
                      : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  placeholder=" "
                  required
                  {...register("username")}
                />
                <label
                  htmlFor="username"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.username ? "text-red-500" : ""
                  }`}
                >
                  Username
                </label>
              </div>
              {validationErrors.username && (
                <p className="text-red-500 text-sm">
                  {validationErrors.username}
                </p>
              )}
              ////////////////////////////////////
              <div
                className={`relative border-b-2 ${
                  validationErrors.apartment
                    ? "border-red-500"
                    : "border-zinc-950"
                }`}
              >
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  ref={register}
                  className={`active:bg-transparent focus:ring-0 peer h-10 w-full border-b-2 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none mr-3 py-1 px-2 leading-tight focus:outline-none  ${
                    validationErrors.apartment
                      ? "border-red-500  text-red-500 "
                      : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  placeholder=" "
                  required
                  {...register("apartment")}
                />
                <label
                  htmlFor="apartment"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.apartment ? "text-red-500" : ""
                  }`}
                >
                  apartment
                </label>
              </div>
              {validationErrors.apartment && (
                <p className="text-red-500 text-sm">
                  {validationErrors.apartment}
                </p>
              )}
              ////// ///////////////////
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#E9672B" }}
                  className="rounded-full w-1/2 text-black font-bold text-md px-5 py-2.5 text-center transform hover:scale-105 active:scale-100 "
                  // bg-orange-500 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;
