import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import NotFound from "../pages/errorpage/Error.jsx";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import ForgotPassword from "../pages/forgetPassword/ForgetPassword";
import ProductDetails from "../pages/productDetails/ProductDetails";
import AdminDashBoard from "../pages/adminDashboard/AdminDashboard";
import CartItem from "../components/cartItem/CartItem";
import About from "../pages/about/About";
import OrderStatus from "../pages/orderStatus/OrderStatus";
import FavouriteList from "../pages/favouriteList/FavouriteList";
import Category from "../pages/category/Category";

import RequireAuth from "../context/RequireAuth";
import Unauthorized from "../pages/unauthorised/Unauthorized";
import Profile from "../pages/profile/Profile";
import ProductListing from "../pages/productsListing/ProductsListing";
// const ROLES = {
//   User: "user",
//   // Editor: 1984,
//   // Admin: 5150,
//   Admin: "Admin",
// };
const ROLES = {
  User: "user",
  Admin: "admin",
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/loading" element={<LoadingAnimation />} />
      <Route path="/favouriteList" element={<FavouriteList />} />

      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/ProductListing" element={<ProductListing />} />
      <Route path="/orderStatus" element={<OrderStatus />} />
      <Route path="/addcategory" element={<Category />} />

      <Route path="/cartitem" element={<CartItem />} />

      {/* <Route path="/AdminDashBoard" element={<AdminDashBoard />} /> */}
      <Route path="/profile" element={<Profile />} />
      {/* restrict access to this route to users with the 'Admin' role */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
      </Route>
      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
        <Route path="/cartitem" element={<CartItem />} />
      </Route> */}
      <Route path="/signup" element={<SignUp />} />

      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
        <Route path="/signup" element={<SignUp />} />
      </Route> */}

      <Route
        path="/about"
        element={
          <RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
            <About />
          </RequireAuth>
        }
      />
      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import Login from "../pages/login/Login";
// import SignUp from "../pages/signUp/SignUp";
// import NotFound from "../pages/errorpage/Error.jsx";
// import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
// import ForgotPassword from "../pages/forgetPassword/ForgetPassword";
// import ProductDetails from "../pages/productDetails/ProductDetails";
// import AdminDashBoard from "../pages/adminDashboard/AdminDashboard";
// import CartItem from "../components/cartItem/CartItem";
// import About from "../pages/about/About";
// import OrderStatus from "../pages/orderStatus/OrderStatus";
// import FavouriteList from "../pages/favouriteList/FavouriteList";
// import Category from "../pages/category/Category";

// import RequireAuth from "../context/RequireAuth";
// import Unauthorized from "../pages/unauthorised/Unauthorized";
// import Profile from "../pages/profile/Profile";
// import ProductListing from "../pages/productsListing/ProductsListing";
// // const ROLES = {
// //   User: "user",
// //   // Editor: 1984,
// //   // Admin: 5150,
// //   Admin: "Admin",
// // };
// const ROLES = {
//   User: "user",
//   Admin: "admin",
// };

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       {/* <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} /> */}
//       <Route
//         path="/login"
//         element={<RequireAuth allowedRoles={[]} fallback={<Login />} />}
//       />
//       <Route
//         path="/signup"
//         element={<RequireAuth allowedRoles={[]} fallback={<SignUp />} />}
//       />
//       {/* <Route path="/signup" element={<SignUp />} /> */}
//       <Route path="/loading" element={<LoadingAnimation />} />
//       <Route path="/favouriteList" element={<FavouriteList />} />

//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//       <Route path="/productdetails" element={<ProductDetails />} />
//       <Route path="/unauthorized" element={<Unauthorized />} />
//       <Route path="/ProductListing" element={<ProductListing />} />
//       <Route path="/orderStatus" element={<OrderStatus />} />
//       <Route path="/addcategory" element={<Category />} />

//       <Route path="/cartitem" element={<CartItem />} />

//       {/* <Route path="/AdminDashBoard" element={<AdminDashBoard />} /> */}
//       <Route path="/profile" element={<Profile />} />
//       {/* restrict access to this route to users with the 'Admin' role */}
//       <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
//         <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
//       </Route>
//       {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
//         <Route path="/cartitem" element={<CartItem />} />
//       </Route> */}

//       {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
//         <Route path="/signup" element={<SignUp />} />
//       </Route> */}

//       <Route
//         path="/about"
//         element={
//           <RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
//             <About />
//           </RequireAuth>
//         }
//       />
//       {/* <Route path="/about" element={<About />} /> */}

//       <Route path="/*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
