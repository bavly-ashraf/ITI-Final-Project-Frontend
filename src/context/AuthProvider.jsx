import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
const dataUrl = "/users/userdata";
const logout = "/users/logout";

export const AuthContext = createContext({});
console.log(AuthContext);

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
    const refreshtoken = getCookie("refreshToken");
    const accessToken = getCookie("accessToken");

    console.log(refreshtoken);
    console.log(auth);
    console.log(auth.user);

    if (refreshtoken) {
      fetchUserData(refreshtoken, accessToken);
    } else {
      setLoading(false);
    }

    // Refresh application every 5 minutes
    const refreshAppInterval = setInterval(() => {
      window.location.reload();
    }, 10 * 60 * 1000); // 5 minutes in milliseconds

    return () => {
      // Clear the refresh interval when the component unmounts
      clearInterval(refreshAppInterval);
    };
  }, []);
  ///////////////////////////

  // const fetchUserData = async (token) => {
  //   try {
  //     const response = await axios.post(dataUrl, {
  //       token,
  //     });
  //     if (!response.data.token) {
  //       throw new Error("Token expired or invalid");
  //     }
  //     const roles = response?.data?.user.role;
  //     const { user } = response.data;
  //     console.log(response.data);
  //     // console.log(user, roles);
  //     const islogged = response?.data?.user.isLogged;
  //     console.log(response.data.token);
  //     const accessToken = response.data.token;
  //     console.log(accessToken);
  //     deleteCookie("accessToken");

  //     setCookie("accessToken", accessToken, 7);

  //     if (user && roles) {
  //       setAuth((prevAuth) => ({
  //         ...prevAuth,
  //         user,
  //         roles,
  //         islogged,
  //         accessToken,
  //       }));
  //       setUserDataFetched(true);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const fetchUserData = async (refreshtoken, accessToken) => {
    try {
      const response = await axios.post(dataUrl, { refreshtoken, accessToken });

      const newAccessToken = response.data.token;
      setCookie("accessToken", newAccessToken, 7);

      console.log(newAccessToken);
      console.log(response.data);
      const roles = response?.data?.user.role;
      const { user } = response.data;
      const islogged = response?.data?.user.isLogged;
      console.log(roles, user, islogged, newAccessToken);
      await setAuth((prevAuth) => ({
        ...prevAuth,
        user,
        roles,
        islogged,
        accessToken: newAccessToken, // Set the updated access token in the state
      }));
      console.log(auth.user);
      setUserDataFetched(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const persist = async ({ user, roles, refresh_Token, accessToken }) => {
    setAuth((prevAuth) => ({
      ...prevAuth,
      user,
      roles,
      refresh_Token,
      accessToken,
    }));
    console.log(refresh_Token);
    if (refresh_Token) {
      setCookie("refreshToken", refresh_Token, 7);
    } else {
      deleteCookie("refreshToken");
    }
    if (accessToken) {
      setCookie("accessToken", accessToken, 7);
    } else {
      deleteCookie("accessToken");
    }
    setUserDataFetched(true);
  };

  const clear = async () => {
    try {
      const token = auth.accessToken;
      if (!token) {
        throw new Error("Access token not found");
      }

      setAuth({ accessToken: null });
      deleteCookie("accessToken");
      deleteCookie("refreshToken");

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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <AuthContext.Provider value={{ auth, persist, clear }}>
      {loading ? (
        <LoadingAnimation />
      ) : userDataFetched ? (
        // Render the children components once user data has been fetched
        children
      ) : (
        <div>
          {children}
          {/* <NotFound /> */}
          {/* <p>Error fetching user data</p> */}
        </div>
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
