import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Input, initTE } from "tw-elements";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductReview(props) {
  console.log(props.reviews);
  const { auth } = useContext(AuthContext);
  console.log(auth);
  const [reviews, setReviews] = useState(props.reviews);
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState("");
  const { id } = useParams();
  console.log(rating);
  console.log(reviewContent);

  const handleAddReview = () => {
    axios
      .post(
        `http://localhost:3000/review/${id}`,
        { reviewContent, rating },
        { headers: { Authorization: auth?.accessToken } }
      )
      .then((response) => {
        console.log(response.data.foundedAddedReview);
        const reviewsCopy = [...reviews];
        reviewsCopy.unshift(response.data.foundedAddedReview);
        setReviews(reviewsCopy);
        toast.success("reviews added successfully");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  };

  const handleDeleteReview=(id) => {
    axios
    .delete(
        `http://localhost:3000/review/${id}`,
        { headers: { Authorization: auth?.accessToken } }
      )
    .then((response) => {
        console.log(response.data.deletedreview);
        const reviewsCopy = [...reviews];
        reviewsCopy.splice(reviewsCopy.indexOf(response.data.deletedreview), 1);
        setReviews(reviewsCopy);
        toast.success("reviews deleted successfully");
      })
    .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  }

  const handleEditeReview=(id) => {
    axios
    .patch(
        `http://localhost:3000/review/${id}`,
        { headers: { Authorization: auth?.accessToken } }
      )
    .then((response) => {
        console.log(response.data.updatedreview);
        const reviewsCopy =reviews.map((review)=>{
          review._id===id ?{...review,reviewContent,rating}:review
        })
        setReviews(reviewsCopy)  
      })
    .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  };
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
            {auth.roles === "user" ? (
              <Link
                type="button"
                className=" rounded bg-green-500 px-10 pb-2 pt-2.5 text-x font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
                onClick={() => window.my_modal_1.showModal()}
              >
                Write a review
              </Link>
            ) : (
              <h1>loading</h1>
            )}
          </div>
          {reviews.map((review,index) => (
            <div
              key={review._id}
              className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden"
            >
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="flex flex-wrap items-center">
                  <div>
                    <div
                      className=" bg-green-500 p-3 text-xl text-center text-white mr-2 "
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      {review.userId.username.slice(0, 1)}
                    </div>
                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                      {review.userId.username}
                    </h4>
                  </div>
                  {/* <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div> */}
                  <div>
                    <span className="mr-4 text-xl font-heading font-medium">
                      {review.rating}.0
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
                    </div>
                  </div>

                  {/* icons start */}
                                     
                  <div>
                  {(auth.user._id===review.userId._id || auth.roles==='admin')&& 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={()=>{
                        handleDeleteReview(review._id)
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>}

                    {(auth.user._id===review.userId._id )&&
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => window.my_modal_2[index].showModal()}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>}
                  </div>
       {/* popup for edit review */}
       <dialog id="my_modal_2" className="modal">
          <form
            method="dialog"
            className="modal-box flex flex-col gap-4 items-center"
          > 
            <svg onClick={()=>{
              window.my_modal_2[index].close()
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            <div className="flex gap-3 mb-2">
              <div
                className=" bg-green-500 p-3 text-xl text-center text-white "
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                {auth.user.username.slice(0, 1)}
              </div>
              <div className="">
                <h2 className="font-semibold">{auth.user.username}</h2>
                <p className="font-light	">
                  Reviews are public and include your acount info
                </p>
              </div>
            </div>
            <div className="rating flex mb-2" style={{ gap: "64px" }}>
              <input
                type="radio"
                name="rating-4"
                value="1"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="2"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="3"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="4"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="5"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
            <div className="relative mb-2 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  "
                id="exampleFormControlInput2"
                placeholder="Describe your experience"
                value={review.reviewContent}

                onChange={(e) => setReviewContent(e.target.value)}
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
              <button className="btn" onClick={handleAddReview}>
                Save
              </button>
            </div>
          </form>
        </dialog>
     
                  {/* icons end */}


                </div>



              </div>
              <div className="px-4 overflow-hidden md:px-16 pt-8  bg-white">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-2/3 md:mb-0">
                    <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                      {review.reviewContent}
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 text-right">
                    <p className="mb-8 text-sm text-gray-300">
                      {Math.floor(
                        new Date() -
                          new Date(review.createdAt) / (1000 * 60 * 60 * 24)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
           {/* popup for add review */}
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
                {auth.user.username.slice(0, 1)}
              </div>
              <div className="">
                <h2 className="font-semibold">{auth.user.username}</h2>
                <p className="font-light	">
                  Reviews are public and include your acount info
                </p>
              </div>
            </div>
            <div className="rating flex mb-2" style={{ gap: "64px" }}>
              <input
                type="radio"
                name="rating-4"
                value="1"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="2"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="3"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="4"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                value="5"
                onChange={(e) => setRating(e.target.value)}
                className="mask mask-star-2 bg-yellow-400"
              />
            </div>
            <div className="relative mb-2 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  "
                id="exampleFormControlInput2"
                placeholder="Describe your experience"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
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
              <button className="btn" onClick={handleAddReview}>
                Post
              </button>
            </div>
          </form>
        </dialog>

      </section>
    </>
  );
}
