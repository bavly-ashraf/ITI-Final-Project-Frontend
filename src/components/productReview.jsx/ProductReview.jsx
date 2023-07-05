import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, initTE } from "tw-elements";

export default function ProductReview() {
  useEffect(() => {
    initTE({ Input });
  }, []);
  return (
    <>
      <section className="pb-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
        <div className=" px-4 mx-auto flex flex-col  ">
          <div className="flex items-center justify-between	">
            <h1 className="text-2xl	font-medium mt-12 mb-14 leading-10 text-center	">
              reviews
            </h1>
            <Link
              type="button"
              className=" rounded bg-green-500 px-10 pb-2 pt-2.5 text-x font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
              onClick={() => window.my_modal_1.showModal()}
            >
              Write a review
            </Link>
          </div>
          <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
              <div className="flex flex-wrap items-center">
              <div
                className=" bg-green-500 p-3 text-xl text-center text-white mr-2 "
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                F
              </div>
                <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                  Faustina H. Fawn
                </h4>
                <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                <span className="mr-4 text-xl font-heading font-medium">
                  5.0
                </span>
                <div className="inline-flex">
                  <a className="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                  <a className="inline-block text-gray-200" href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 overflow-hidden md:px-16 pt-8  bg-white">
              <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 md:mb-0">
                  <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum
                    molestie. Vestibulum suscipit sagittis dignissim mauris.
                  </p>
                </div>
                <div className="w-full md:w-1/3 text-right">
                  <p className="mb-8 text-sm text-gray-300">
                    Added 2 months ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <form
            method="dialog"
            className="modal-box flex flex-col gap-4 items-center"
          >
            <div className="flex gap-3 mb-2">
              <div
                className=" bg-green-500 p-3 text-xl text-center text-white "
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                D
              </div>
              <div className="">
                <h2 className="font-semibold">Donia Amin</h2>
                <p className="font-light	">
                  Reviews are public and include your acount info
                </p>
              </div>
            </div>
            <div className="rating flex mb-2" style={{ gap: "64px" }}>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
            <div className="relative mb-2 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  "
                id="exampleFormControlInput2"
                placeholder="Describe your experience"
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Describe your experience
              </label>
            </div>

            <div className="modal-action mt-0">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Post</button>
            </div>
          </form>
        </dialog>
      </section>
    </>
  );
}
