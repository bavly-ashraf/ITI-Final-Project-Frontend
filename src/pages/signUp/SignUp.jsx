import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
// import "./SignUP.css";

const schema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required",
    "string.min": "Username should have a minimum length of {#limit}",
  }),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required()
    .label("Username")
    .messages({
      "string.alphanum": "Username must contain only alphanumeric characters",
      "string.min": "Username should have a minimum length of {#limit}",
      "string.max": "Username should have a maximum length of {#limit}",
      "any.required": "{#label} is required",
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email")
    .messages({
      "string.email": "Invalid Email",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,}$"))
    .required()
    .label("Password"),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm Password"),
});
export default function SignUp() {
  const [validationErrors, setValidationErrors] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { error } = schema.validate(data, {
      abortEarly: false,
      messages: {
        "string.base": `{#label} should be a type of 'text'`,
        "string.min": `{#label} should have a minimum length of {#limit}`,
        "string.max": `{#label} should have a maximum length of {#limit}`,
        // "any.required": `{#label} is required`,
        "any.only": `It doesnt match first password`,
        "string.pattern.base": `Invalid {#label}`,
      },
    });
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.key] = detail.message;
      });
      setValidationErrors(validationErrors);
    } else {
      console.log("Form submitted:", data);
      setValidationErrors({});
      console.log(data);
    }
  };

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900"
      style={{ backgroundColor: "#fbf8f5" }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-black"
        >
          <p> Create an Account</p>
        </a>

        <div
          style={{ backgroundColor: "#fbf8f5" }}
          className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Create an Account
            </h1> */}
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div
                className={`relative border-b-2 ${
                  validationErrors.name ? "border-red-500" : "border-zinc-950"
                }`}
              >
                <input
                  type="name"
                  name="name"
                  id="name"
                  ref={register}
                  className={`active:bg-transparent focus:ring-0 peer h-10 w-full border-b-2 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none mr-3 py-1 px-2 leading-tight focus:outline-none  ${
                    validationErrors.password
                      ? "border-red-500  text-red-500 "
                      : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  placeholder="name"
                  required
                  {...register("name")}
                />
                <label
                  htmlFor="name"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.password ? "text-red-500" : ""
                  }`}
                >
                  Full name{" "}
                </label>
              </div>
              {validationErrors.name && (
                <p className="text-red-500 text-sm">{validationErrors.name}</p>
              )}

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
                  placeholder="username"
                  required
                  {...register("username")}
                />
                <label
                  htmlFor="username"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.username ? "text-red-500" : ""
                  }`}
                >
                  Username{" "}
                </label>
              </div>
              {validationErrors.username && (
                <p className="text-red-500 text-sm">
                  {validationErrors.username}
                </p>
              )}

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
                  placeholder="Email"
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
                  type="password"
                  name="password"
                  id="password"
                  ref={register}
                  placeholder="Password"
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
              </div>
              {validationErrors.password && (
                <p className="text-red-500 text-sm">
                  {validationErrors.password}
                </p>
              )}

              <div
                className={`relative border-b-2 ${
                  validationErrors.confirmPassword
                    ? "border-red-500"
                    : "border-zinc-950"
                }`}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  ref={register}
                  className={`active:bg-transparent focus:ring-0 peer h-10 w-full border-b-2 text-gray-900 placeholder-transparent appearance-none bg-transparent border-none mr-3 py-1 px-2 leading-tight focus:outline-none  ${
                    validationErrors.confirmPassword
                      ? "border-red-500  text-red-500 "
                      : ""
                  }`}
                  style={{
                    backgroundColor: "fbf8f5",
                    transition: "background-color 0.66s",
                  }}
                  placeholder="confirmPassword"
                  required
                  {...register("confirmPassword")}
                />
                <label
                  htmlFor="confirmPassword"
                  className={` absolute left-0 -top-3.5 text-gray-600 text-sm transition-all  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${
                    validationErrors.confirmPassword ? "text-red-500" : ""
                  }`}
                >
                  ConfirmPassword{" "}
                </label>
              </div>
              {validationErrors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {validationErrors.confirmPassword}
                </p>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#E9672B" }}
                  className="transform hover:scale-105 active:scale-100 rounded-full w-4/5 text-black font-bold  text-lg px-5 py-2.5 text-center"
                >
                  {/* transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... */}
                  Create An Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
