import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import axios from "../../api/axios";
const forgotPassword_URL = "/users/forgotPassword";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
});

export default function ForgotPassword() {
  const [validationErrors, setValidationErrors] = useState({});
  const { register, handleSubmit } = useForm();

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
        const response = await axios.post(forgotPassword_URL, data);
        console.log("Password reset email sent:", response.data);
        setValidationErrors({});
      } catch (error) {
        console.error("An error occurred:", error);
        if (error.response && error.response.data) {
          setValidationErrors({ error: error.response.data.error });
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
        <div
          style={{ backgroundColor: "#fbf8f5" }}
          className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
        >
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className=" space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <p className="items-center text-center mb-6 text-3xl font-bold text-blue-900 dark:text-black">
                Help Signing In
              </p>

              <p className="text-justify text-lg text-black ">
                Enter the email address associated with your account. Remember
                your account can only be linked to the email you checked out
                with. We will send you an email with a link to verify your
                account and reset your password.
              </p>
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#E9672B" }}
                  className="rounded-full w-1/2 text-black font-bold text-md px-5 py-2.5 text-center transform hover:scale-105 active:scale-100"
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
