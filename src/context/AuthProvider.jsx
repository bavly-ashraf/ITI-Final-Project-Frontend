import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
const dataUrl = "/users/userdata";
const logout = "/users/logout";

export const AuthContext = createContext({});

const getCookie = (name) => {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : null;
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: getCookie("accessToken"),
  });
  const [loading, setLoading] = useState(true);
  const [userDataFetched, setUserDataFetched] = useState(false);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      setAuth((prevAuth) => ({ ...prevAuth, accessToken }));
      fetchUserData(accessToken);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.post(dataUrl, {
        token,
      });
      const roles = response?.data?.user.role;
      const { user } = response.data;
      console.log(response.data);
      // console.log(user, roles);
      const islogged = response?.data?.user.isLogged;

      if (user && roles) {
        setAuth((prevAuth) => ({ ...prevAuth, user, roles, islogged }));
        setUserDataFetched(true);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const persist = ({ user, roles, accessToken }) => {
    setAuth((prevAuth) => ({ ...prevAuth, user, roles, accessToken }));
    if (accessToken) {
      setCookie("accessToken", accessToken, 7);
    } else {
      deleteCookie("accessToken");
    }
  };

  const clear = async () => {
    try {
      const token = auth.accessToken;
      if (!token) {
        throw new Error("Access token not found");
      }

      setAuth({ accessToken: null });
      deleteCookie("accessToken");

      const response = await axios.post(logout, null, {
        headers: { Authorization: token },
      });
      console.log(response);

      // Handle the response if needed
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  ////////////////////////////////////////////////////////////////////////////////////////////
  // const persistCartData = () => {
  //   const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  //   localStorage.setItem("cart", JSON.stringify(cartData));
  // };

  const updateCart = (productId, count) => {
    const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Checking if it exist
    const existingProductIndex = existingCartData.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      // Update the count
      existingCartData[existingProductIndex].count += count;
    } else {
      // Add the new product
      const newProduct = {
        id: productId,
        count: count,
      };
      existingCartData.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartData));
  };

  const getCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    return cartData;
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <AuthContext.Provider value={{ auth, persist, clear, updateCart, getCart }}>
      {loading ? (
        <LoadingAnimation />
      ) : userDataFetched ? (
        // Render the children components once user data has been fetched
        children
      ) : (
        <div>
          {children}
          {/* <p>Error fetching user data</p> */}
        </div>
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
