import React from "react";

export default function About() {
  return (
    <div
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      style={{ backgroundColor: "#fbf8f5" }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <div className="font-normal text-justify text-base leading-6 text-gray-600 ">
            <p>
              Welcome to our furniture store, where passion for design meets
              exceptional craftsmanship. We believe that furniture should not
              only be functional but also inspire and elevate your living
              spaces. With a blend of timeless elegance and modern
              sophistication, we bring you furniture pieces that are a perfect
              reflection of your unique style and personality.
            </p>
            <p>
              Our team of experienced designers and artisans work meticulously
              to create furniture that embodies comfort, durability, and
              aesthetic appeal. From meticulously selected materials to
              impeccable attention to detail, every piece in our collection is
              crafted with utmost care and precision.
            </p>
            <p>
              Whether you're looking to furnish your living room, bedroom,
              dining area, or any other space, we offer a wide range of options
              to suit your needs. From luxurious sofas and elegant dining sets
              to functional storage solutions and stylish accents, we have
              curated a collection that caters to diverse tastes and
              preferences.
            </p>

            <p>
              Visit our showroom today and embark on a journey of transforming
              your space into a haven of comfort and style. Experience the
              essence of fine furniture and discover the joy of creating a home
              that truly reflects who you are.
            </p>
          </div>
        </div>
        <div className=" self-center w-full lg:w-7/12 ">
          <img
            className="w-full "
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <div className="font-normal text-justify text-base leading-6 text-gray-600 ">
            <p>
              It all started with a humble workshop, where skilled artisans
              honed their craft and brought life to raw materials. With
              meticulous attention to detail and unwavering dedication, our
              furniture quickly gained recognition for its quality and timeless
              appeal.
            </p>
            <p>
              As our reputation grew, so did our passion for innovation. We
              embraced new techniques and explored unique materials to push the
              boundaries of design. From classic elegance to contemporary
              sophistication, our collection expanded to cater to a diverse
              range of tastes and styles.
            </p>
            <p>
              Today, we are proud to have become a trusted name in the world of
              furniture. Each piece in our collection tells a story of
              creativity, passion, and the pursuit of excellence. We continue to
              uphold our commitment to quality, ensuring that every item bears
              the mark of our craftsmanship.
            </p>
            <p>
              Join us in celebrating the beauty of fine furniture and be a part
              of our story. Explore our collection and discover pieces that will
              transform your space into a sanctuary of style and comfort.
            </p>
          </div>
        </div>
        <div className="self-center w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
