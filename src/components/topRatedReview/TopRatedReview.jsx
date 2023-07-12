import { useState, useEffect } from "react";
import axios from "../../api/axios";

function TopRatedReview() {
  const LOGIN_URL = "/review/top/review";
  const arr = [1, 2, 3, 4, 5];
  const colorSchema = [
    {
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
    },
    {
      border: "2px solid rgb(34, 93, 202)",
      shadowColor: "rgb(231, 203, 67) 8px -8px 0px ",
    },
    {
      border: "2px solid rgb(36, 41, 71)",
      shadowColor: "rgb(162, 212, 197) 8px -8px 0px ",
    },

    {
      border: "2px solid rgb(222, 67, 51)",
      shadowColor: "rgb(175, 73, 32) 8px -8px 0px",
    },
    {
      border: "2px solid rgb(36, 41, 71)",
      shadowColor: "rgb(205, 212, 84) 8px -8px 0px",
    },
  ];
  const starColor = [
    "rgb(203, 198, 244)  ",
    "rgb(231, 203, 67) ",
    "rgb(162, 212, 197) ",
    "rgb(175, 73, 32)",
    "rgb(205, 212, 84)",
  ];

  const [reviewCards, setReviewCards] = useState([]);

  useEffect(() => {
    axios
      .get(LOGIN_URL)
      .then((response) => {
        console.log(response.data.reviews);
        setReviewCards(response.data.reviews);
      })
      .catch(() => {
        console.log("error fetching data");
      });
  }, []);

  return (
    <>
      <section className="flex flex-col items-center overflow-hidden justify-center mb-36  ">
        <h1 className="text-5xl	font-medium mt-12 mb-14 leading-10	">
          The Reviews are In
        </h1>
        <div className="overflow-x-scroll w-full">
          <div
            className="flex flex-row  gap-x-7 gap-y-5	 mb-16 justify-center"
            style={{ marginLeft: " 900px" }}
          >
            {reviewCards.length === 0 ? (
              <div>Loading...</div>
            ) : (
              reviewCards?.map((review, index) => (
                <div
                  key={index}
                  className=" p-9  "
                  style={{
                    border: colorSchema[index].border,
                    boxShadow: colorSchema[index].shadowColor,
                    minWidth: "380px",
                    height: "230px",
                  }}
                >
                  <div className="rating pb-8	">
                    {arr.map((num, index) => (
                      <input
                        key={index}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 "
                        style={{
                          backgroundColor:
                            index !== 5 ? starColor[0] : starColor[index + 1],
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="pb-8 text-base">{review.reviewContent}</p>
                    <strong className="pb-8	">- {review.userId?.username}</strong>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default TopRatedReview;
