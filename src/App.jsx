import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ReactDOM from "react-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { auth } = useContext(AuthContext);
  let [cartItems, setCartItems] = useState([]);
  let [inCart, setInCart] = useState(false);
  let [orderedItem, setOrderedItem] = useState(0);
  //getting cart items
  useEffect(() => {
    console.log("getting cart items....");
    getCartItems();
  }, []);

  const notify = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const errorMsg = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const getCartItems = async () => {
    if(auth.accessToken){      
      const response = await axios.get("http://localhost:3000/orderedItems", {
        headers: { Authorization: auth.accessToken },
      });
      setCartItems(response.data.orderItem);
      console.log(response.data.orderItem);
    }
  };

  const addToCart = async (id, no_of_items) => {
    if(auth.accessToken){
      try {
        if (no_of_items > 0) {
          const response = await axios.post(
            `http://localhost:3000/orderedItems/`,
            {
              productId: id,
              quantity: no_of_items,
            },
            {
              headers: { Authorization: auth.accessToken },
            }
          );
          setInCart(true);
          setOrderedItem(response.data.orderItem._id);
          cartItems = cartItems.filter(item=>item._id != response.data.orderItem._id);
          setCartItems([response.data.orderItem, ...cartItems]);
          console.log(response);
          notify("Item Successfully Added To Cart");
        } else {
          errorMsg("you have to add at least 1 item to the cart");
        }
      } catch (error) {
        console.error(error);
        errorMsg("Items could not be added to cart sorry");
      }
    }
    else{
      toast.error("Please login to add to cart")
    }
  };

  const removeFromCart = async (orderedItem) => {
    try {
      let response = await axios.delete(
        `http://localhost:3000/orderedItems/${orderedItem}`,
        {
          headers: { Authorization: auth.accessToken },
        }
      );
      setInCart(false);
      setCartItems(
        cartItems.filter(
          (items) => items._id != response.data.deletedorderItem._id
        )
      );
      notify("Item Deleted Successfully!");
    } catch (err) {
      errorMsg(err.message);
    }
  };
  return (
    <>
      <div>
        <ToastContainer />
        <Header cartItems={cartItems} />
        <div className="py-32">
          <AppRoutes
            cartItems={cartItems}
            addToCart={addToCart}
            inCart={inCart}
            setInCart={setInCart}
            removeFromCart={removeFromCart}
            orderedItem={orderedItem}
            setOrderedItem={setOrderedItem}
          />
        </div>
        <Footer />
        {/* <AdminDashBoard/> */}
        {/* <ProductDetails/> */}

        {/* <h1 className="custom-font custom-font-black">feather 1 - Black</h1>
        <h1 className="custom-font custom-font-blackitalic">
          Feather 1 - Black Italic
        </h1>
        <h1 className="custom-font custom-font-bold">Feather 1 - Bold</h1>
        <h1 className="custom-font custom-font-bolditalic">
          Feather 1 - Bold Italic
        </h1>
        <h1 className="custom-font custom-font-book">Feather 1 - Book</h1>
        <h1 className="custom-font custom-font-bookitalic">
          Feather 1 - Book Italic
        </h1>
        <h1 className="custom-font custom-font-extrabold">
          Feather 1 - Extra Bold
        </h1>
        <h1 className="custom-font custom-font-extrabolditalic">
          Feather 1 - Extra Bold Italic
        </h1>
        <h1 className="custom-font custom-font-hairline">
          Feather 1 - Hairline
        </h1>
        <h1 className="custom-font custom-font-hairlineitalic">
          Feather 1 - Hairline Italic
        </h1>
        <h1 className="custom-font custom-font-light">Feather 1 - Light</h1>
        <h1 className="custom-font custom-font-lightitalic">
          Feather 1 - Light Italic
        </h1>
        <h1 className="custom-font custom-font-medium">Feather 1 - Medium</h1>
        <h1 className="custom-font custom-font-mediumitalic">
          Feather 1 - Medium Italic
        </h1>
        <h1 className="custom-font custom-font-thin">Feather 1 - Thin</h1>
        <h1 className="custom-font custom-font-thinitalic">
          Feather 1 - Thin Italic
        </h1>

        <h1 className="custom-font-black" style={{ fontSize: "24px" }}>
          feather 1 - Black
        </h1>
        <h1 className="custom-font-blackitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Black Italic
        </h1>
        <h1 className="custom-font-bold" style={{ fontSize: "24px" }}>
          Feather 1 - Bold
        </h1>
        <h1 className="custom-font-bolditalic" style={{ fontSize: "24px" }}>
          Feather 1 - Bold Italic
        </h1>
        <h1 className="custom-font-book" style={{ fontSize: "24px" }}>
          Feather 1 - Book
        </h1>
        <h1 className="custom-font-bookitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Book Italic
        </h1>
        <h1 className="custom-font-extrabold" style={{ fontSize: "24px" }}>
          Feather 1 - Extra Bold
        </h1>
        <h1
          className="custom-font-extrabolditalic"
          style={{ fontSize: "24px" }}
        >
          Feather 1 - Extra Bold Italic
        </h1>
        <h1 className="custom-font-hairline" style={{ fontSize: "24px" }}>
          Feather 1 - Hairline
        </h1>
        <h1 className="custom-font-hairlineitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Hairline Italic
        </h1>
        <h1 className="custom-font-light" style={{ fontSize: "24px" }}>
          Feather 1 - Light
        </h1>
        <h1 className="custom-font-lightitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Light Italic
        </h1>
        <h1 className="custom-font-medium" style={{ fontSize: "24px" }}>
          Feather 1 - Medium
        </h1>
        <h1 className="custom-font-mediumitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Medium Italic
        </h1>
        <h1 className="custom-font-thin" style={{ fontSize: "24px" }}>
          Feather 1 - Thin
        </h1>
        <h1 className="custom-font-thinitalic" style={{ fontSize: "24px" }}>
          Feather 1 - Thin Italic
        </h1> */}
      </div>
    </>
  );
}
export default App;
