import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import ProductDetailsItem from "../../components/productDetailsItem/ProductDetailsItem";
import ProductDescription from "../../components/productDescription/ProductDescription";
import axios from "axios";
import { useEffect } from "react";


const ProductDetails = () => {
  // async function fetchData() {
  //   try {
  //     const response = await axios.get("http://localhost:8080/products/:id");
  //     // Handle the response data
  //     setWordList(response.data);
  //     initializeCounter(response.data.length - 1);
  //   } catch (error) {
  //     // Handle error
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   // fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  let product = {
    name: "Dummy Product",
    details: {
      description:
        "The Valencia is our most customizable seating option with a modular design that’s perfect for apartment living. Choose from 3 or 4 individual pieces and configure to fit the needs of your space—create a long sofa that seats up to 4 people, a sectional, or a chair with loveseat. Hidden clips keep the pieces secure in whichever configuration you choose. Item arrives in 3-4 pieces.",
      details_images: [
        "src/assets/Images/ProductDetails/ProductDetails/val-sec-04_dimensions (1).webp",
        "src/assets/Images/ProductDetails/ProductDetails/val-sec-04_dimensions (1).webp",
      ],
      dimensions: {
        height: 10,
        width: 5,
        depth: 3,
      },
    },
    price: 9.99,
    category: "60d35e3027b686196c1d5b11",
    photo_url: [
      "src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg",
      "src/assets/Images/ImageSlider/avif/gea-cof-05_detail_2_2x3.webp",
      "src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_675457.webp",
      "src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_c89dc2.webp",
      "src/assets/Images/ImageSlider/avif/gea-cof-05_silo_5_2x3.webp",
    ],
    vendor: "Dummy Vendor",
    no_of_items_in_stock: 5,
    availability: "available",
  };

  return (
    <div className="md:flex-col pt-24">
      <div className="flex justify-start bg-[#FBF8F5] lg:flex-row md:flex-row sm:flex-col mb-10">
        <ImageSlider product={product} />
        <ProductDetailsItem product={product} className="col-span-4" />
      </div>
      <div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
