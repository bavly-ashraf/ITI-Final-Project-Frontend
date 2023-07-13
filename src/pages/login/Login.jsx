import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import "./Login.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

import axios from "../../api/axios";
const LOGIN_URL = "/users/login";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
    })
    .label("Email"),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,}$"))
    .required()
    .messages({
      "string.pattern.base": "Password should be at least 8 characters",
    })
    .label("Password"),
});

export default function App() {
  const [validationErrors, setValidationErrors] = useState({});
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { persist } = useContext(AuthContext);

  const notify = (name) =>
    toast.success(`Welcome  ${name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastClassName: "custom-toast",
      // style: {
      //   background: "9BCDD2",
      //   color: "black",
      // },
      style: { background: "#9BCDD2", color: "#FF8551" },
      toastStyle: {
        "--toastify-color-success": "orange",
      },
    });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        const name = response.data.user.username;
        const { token, user } = response.data; // Extract token and user from the response
        console.log(response.data);
        // console.log(islogged);
        // const roles = response?.data?.roles;
        const roles = response?.data?.user.role;
        const islogged = response?.data?.user.isLogged;
        console.log(user, token, roles);
        // setAuth({ user, roles, accessToken }); // Pass user and token to setAuth
        persist({ user, roles, islogged, accessToken: token });

        notify(name);
        navigate("/"); // Programmatically navigate to the login page

        setValidationErrors({});
        // Do something with the logged-in user and token
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
        }
      }
    }
  };

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
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleSubmit(onSubmit)();
                }
              }}
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
                    validationErrors.password ? "border-red-500" : ""
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

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-black dark:bg-gray-700 dark:border-gray-600 dark:"
                      required
                    />
                  </div> */}
                  {/* <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div> */}
                </div>

                {/* Open the modal using ID.showModal() method */}

                <a
                  href="#"
                  onClick={() => window.my_modal_2.showModal()}
                  className="modal-link"
                >
                  Forgot password?
                </a>

                <dialog id="my_modal_2" className="modal">
                  <div
                    style={{ backgroundColor: "#fbf8f5" }}
                    method="dialog"
                    className="modal-box bg-gray-50 dark:bg-gray-900 p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24"
                  >
                    {/* Links */}
                    <div className="flex flex-col  items-center space-y-10 text-center">
                      <p className="text-black text-3xl font-bold">
                        Need help signing in?
                      </p>
                      <Link
                        to="/forgetpassword"
                        className="text-black text-lg hover:underline dark:text-primary-500"
                      >
                        <button
                          style={{ backgroundColor: "#E9672B" }}
                          className="transform hover:scale-105 active:scale-100 rounded-full w-full text-lg font-bold px-6 py-3 text-center whitespace-nowrap overflow-hidden"
                        >
                          Reset Your password
                        </button>
                      </Link>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#E9672B" }}
                  className="rounded-full w-1/2 text-black font-bold text-md px-5 py-2.5 text-center transform hover:scale-105 active:scale-100 "
                  // bg-orange-500 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600
                >
                  Sign in
                </button>
              </div>
              <p
                style={{ color: "#E9672B" }}
                className="text-center text-lg text-gray-500 dark:text-gray-400"
              >
                <Link
                  to="/signup"
                  className="font-bold underline text-primary-600 hover:underline dark:text-primary-500"
                >
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
