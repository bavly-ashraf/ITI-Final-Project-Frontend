import { useEffect, useState } from "react";
import axios from "../../api/axios";
export default function BestSeller(){
    const LOGIN_URL = "/products/top/rated";
    const [products, setProducts] = useState([]);

      useEffect(() => {
        axios
          .get(LOGIN_URL)
          .then((response) => {
            console.log(response.data.topProducts);
            setProducts(response.data.topProducts);
          })
          .catch(() => {
            console.log("error fetching data");
          });
      }, []);
    
    return(
        <>
         <section className="flex justify-center flex-col items-center overflow-hidden">
        <h1 className="text-3xl	font-medium mt-12 mb-10 leading-10	">
          Shop our Bestsellers
        </h1>
        <div className="flex flex-row justify-center flex-wrap gap-y-1 lg:w-full  mb-16 overflow-hidden">
          {products.length ? (
            products.map((product, index) => (
              <div
                key={index}
                className="flex justify-center product-card living bg-white sm:w-8/12 lg:w-2/12 "
              >
                <a to="/" className="text-center">
                  <div>
                    <div className="mb-5">
                      <img className="h-52 object-cover" src={product.photo_url[0]} />
                    </div>
                  </div>
                  <div>
                    <span className="my-4 text-lg text-black product-name 	">
                      {product.name}
                    </span>
                  </div>
                  <div>
                    <p className="mb-4 mt-2 text-lg text-black	">
                      buy for{" "}
                      <span
                        className="text-xl font-bold"
                        style={{ color: " rgb(233, 103, 43)" }}
                      >
                        {" "}
                        {product.price}
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <h1>Data Not found</h1>
          )}
        </div>
        <a to="/" className="All-Btn mb-16" href="">
          Shop All Furniture
        </a>
      </section>
        </>
    )
}