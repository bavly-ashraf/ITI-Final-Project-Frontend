// import PropTypes from "prop-types";
// import { createContext, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});
//   console.log("hey there1");

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default { AuthContext, AuthProvider };
// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});
//   const [persist, setPersist] = useState(
//     localStorage.getItem("persist") === "true"
//   );

//   useEffect(() => {
//     localStorage.setItem("persist", persist);
//   }, [persist]);

//   useEffect(() => {
//     if (!persist) {
//       // Clear the auth data from local storage when persist is false
//       localStorage.removeItem("auth");
//     } else {
//       // Store the auth data in local storage when persist is true
//       localStorage.setItem("auth", JSON.stringify(auth));
//     }
//   }, [auth, persist]);

//   useEffect(() => {
//     // Load the auth data from local storage when the component mounts
//     const storedAuth = localStorage.getItem("auth");
//     if (storedAuth) {
//       setAuth(JSON.parse(storedAuth));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default { AuthContext, AuthProvider };
// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     roles: [],
//     accessToken: localStorage.getItem("accessToken"), // check if token exists in local storage
//   });

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       setAuth({ ...auth, accessToken }); // update the auth state with the token from local storage
//     }
//   }, []); // run once when component mounts

//   const persist = ({ user, roles, accessToken }) => {
//     setAuth({ ...auth, user, roles, accessToken }); // update the auth state with the new user, roles, and token
//     localStorage.setItem("accessToken", accessToken); // store the token in local storage
//   };

//   const clear = () => {
//     setAuth({ user: null, roles: [], accessToken: null }); // clear the auth state
//     localStorage.removeItem("accessToken"); // remove the token from local storage
//   };

//   return (
//     <AuthContext.Provider value={{ auth, persist, clear }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
///////////////////////////////////COOkies
// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext({});

// const getCookie = (name) => {
//   const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
//   return cookieValue ? cookieValue.pop() : null;
// };

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: JSON.parse(getCookie("user")),
//     roles: JSON.parse(getCookie("roles")),
//     accessToken: getCookie("accessToken"),
//   });

//   useEffect(() => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       setAuth({ ...auth, accessToken });
//     }
//   }, []);

//   const persist = ({ user, roles, accessToken }) => {
//     setAuth({ ...auth, user, roles, accessToken });
//     if (accessToken) {
//       setCookie("accessToken", accessToken, 7); // Set the cookie to expire after 7 days
//       setCookie("user", JSON.stringify(user), 7);
//       setCookie("roles", JSON.stringify(roles), 7);
//     } else {
//       deleteCookie("accessToken");
//       deleteCookie("user");
//       deleteCookie("roles");
//     }
//   };

//   const clear = () => {
//     setAuth({ user: null, roles: [], accessToken: null });
//     deleteCookie("accessToken");
//     deleteCookie("user");
//     deleteCookie("roles");
//   };

//   const setCookie = (name, value, days) => {
//     const expires = new Date(
//       Date.now() + days * 24 * 60 * 60 * 1000
//     ).toUTCString();
//     document.cookie = `${name}=${value}; expires=${expires}; path=/`;
//   };

//   const deleteCookie = (name) => {
//     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//   };

//   return (
//     <AuthContext.Provider value={{ auth, persist, clear }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

///////////////////{Local Storagq}
// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: JSON.parse(localStorage.getItem("user")),
//     roles: JSON.parse(localStorage.getItem("roles")),
//     accessToken: localStorage.getItem("accessToken"),
//   });

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       setAuth({ ...auth, accessToken });
//     }
//   }, []);

//   const persist = ({ user, roles, accessToken }) => {
//     setAuth({ ...auth, user, roles, accessToken });
//     if (accessToken) {
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("roles", JSON.stringify(roles));
//     } else {
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("user");
//       localStorage.removeItem("roles");
//     }
//   };

//   const clear = () => {
//     setAuth({ user: null, roles: [], accessToken: null });
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("user");
//     localStorage.removeItem("roles");
//   };

//   return (
//     <AuthContext.Provider value={{ auth, persist, clear }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
///////////////////////////
// import PropTypes from "prop-types";
// import { createContext, useState, useEffect } from "react";
// import axios from "../api/axios";
// const dataUrl = "/users/userdata";
// export const AuthContext = createContext({});
// const getCookie = (name) => {
//   const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
//   return cookieValue ? cookieValue.pop() : null;
// };
// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: JSON.parse(getCookie("user")),
//     roles: JSON.parse(getCookie("roles")),
//     accessToken: getCookie("accessToken"),
//   });

//   useEffect(() => {
//     const accessToken = getCookie("accessToken");
//     if (accessToken) {
//       setAuth((prevAuth) => ({ ...prevAuth, accessToken }));
//       fetchUserData(accessToken); // Fetch user data when the accessToken is present
//     }
//   }, []);

//   const fetchUserData = async (token) => {
//     try {
//       const response = await axios.post(dataUrl, {
//         token,
//       });
//       console.log(response.data);
//       const roles = response?.data?.user.role;

//       const { user } = response.data;

//       console.log(user, roles);
//       // setAuth({ token, user, roles });
//       if (user && roles && token) {
//         setAuth({ ...auth, user, roles, token });
//       }
//       // setAuth((prevAuth) => ({
//       //   user,
//       //   roles,
//       //   token,
//       // }));
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const persist = ({ user, roles, accessToken }) => {
//     setAuth((prevAuth) => ({ ...prevAuth, user, roles, accessToken }));
//     if (accessToken) {
//       setCookie("accessToken", accessToken, 7); // Set the cookie to expire after 7 days
//       // setCookie("user", JSON.stringify(user), 7);
//       // setCookie("roles", JSON.stringify(roles), 7);
//     } else {
//       deleteCookie("accessToken");
//       deleteCookie("user");
//       deleteCookie("roles");
//     }
//   };

//   const clear = () => {
//     setAuth({ user: null, roles: [], accessToken: null });
//     deleteCookie("accessToken");
//     deleteCookie("user");
//     deleteCookie("roles");
//   };

//   const setCookie = (name, value, days) => {
//     const expires = new Date(
//       Date.now() + days * 24 * 60 * 60 * 1000
//     ).toUTCString();
//     document.cookie = `${name}=${value}; expires=${expires}; path=/`;
//   };

//   const deleteCookie = (name) => {
//     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//   };

//   return (
//     <AuthContext.Provider value={{ auth, persist, clear }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
const dataUrl = "/users/userdata";

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
      fetchUserData(accessToken); // Fetch user data when the accessToken is present
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

      if (user && roles) {
        setAuth((prevAuth) => ({ ...prevAuth, user, roles }));
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
      setCookie("accessToken", accessToken, 7); // Set the cookie to expire after 7 days
    } else {
      deleteCookie("accessToken");
    }
  };

  const clear = () => {
    setAuth({ accessToken: null });
    deleteCookie("accessToken");
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

  return (
    <AuthContext.Provider value={{ auth, persist, clear }}>
      {loading ? (
        // Show a loading indicator while fetching user data
        <LoadingAnimation />
      ) : userDataFetched ? (
        // Render the children components once user data has been fetched
        children
      ) : (
        // Handle the case when user data couldn't be fetched

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
