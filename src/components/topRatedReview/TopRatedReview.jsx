function TopRatedReview() {
  const reviewCards = [
    {
      contant: "Honestly BEST EXPERIENCE moving ever.",
      userInfo: "- Julie, San Francisco, CA",
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
      title: "Living Room",
    },
    {
      contant: "Honestly BEST EXPERIENCE moving ever.",
      userInfo: "- Julie, San Francisco, CA",
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
      title: "Living Room",
    },
    {
      contant: "Honestly BEST EXPERIENCE moving ever.",
      userInfo: "- Julie, San Francisco, CA",
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
      title: "Living Room",
    },
    {
      contant: "Honestly BEST EXPERIENCE moving ever.",
      userInfo: "- Julie, San Francisco, CA",
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
      title: "Living Room",
    },
    {
      contant: "Honestly BEST EXPERIENCE moving ever.",
      userInfo: "- Julie, San Francisco, CA",
      border: "2px solid rgb(233, 103, 43)",
      shadowColor: "rgb(203, 198, 244)  8px -8px 0px ",
      title: "Living Room",
    },
  ];
  const arr = [1, 2, 3, 4, 5];
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
            {reviewCards.map((card, index) => (
              <div
                key={index}
                className=" p-9  "
                style={{
                  border: card.border,
                  boxShadow: card.shadowColor,
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
                      style={{ backgroundColor: "rgb(203, 198, 244)" }}
                    />
                  ))}
                </div>
                <p className="pb-8 text-base">{card.contant}</p>
                <strong className="pb-8	">{card.userInfo}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default TopRatedReview;
