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
import CheckOut from "../pages/checkout/Checkout";
import ResetPassword from "../pages/resetPasword/ResetPassord";
import RequireAuth from "../context/RequireAuth";
import Unauthorized from "../pages/unauthorised/Unauthorized";
import ProductListing from "../pages/productsListing/ProductsListing";
import VerificationForm from "../pages/verifyemail/VerifyEmail";
const ROLES = {
  User: "user",
  Admin: "admin",
};

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loading" element={<LoadingAnimation />} />
      <Route path="/favouriteList" element={<FavouriteList />} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
      <Route path="/ForgetPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />

      <Route
        path="/products/product/:id"
        element={
          <ProductDetails
            cartItems={props.cartItems}
            addToCart={props.addToCart}
            inCart={props.inCart}
            setInCart={props.setInCart}
            removeFromCart={props.removeFromCart}
            orderedItem={props.orderedItem}
            setOrderedItem={props.setOrderedItem}
          />
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/ProductListing" element={<ProductListing />} />
      <Route path="/orderStatus" element={<OrderStatus />} />
      {/* <Route path="/cartitem" element={<CartItem />} /> */}
      <Route path="/orderedItems" element={<Category />} />
      <Route path="verifyemail" element={<VerificationForm />} />

      <Route
        path="/checkout"
        element={<CheckOut cartItems={props.cartItems} removeAllCartItems={props.removeAllCartItems} />}
      />
      {/* restrict access to this route to users with the 'Admin' role */}
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/CartItem"
        element={
          <CartItem
            cartItems={props.cartItems}
            removeFromCart={props.removeFromCart}
          />
        }
      />
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
        {/*inside we put routes for admins and users */}
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        {/*inside we put routes for admins */}
        <Route path="/addcategory" element={<Category />} />

        <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
      </Route>

      <Route path="/about" element={<About />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
