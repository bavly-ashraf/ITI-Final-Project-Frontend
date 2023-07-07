import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ReactDOM from "react-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import AdminDashBoard from "./pages/adminDashboard/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <ToastContainer />

        <Header />
        <AppRoutes />
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
