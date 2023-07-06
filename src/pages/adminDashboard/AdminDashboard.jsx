import { React, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import ReactDOM from "react-dom";
import { useState } from "react";
import OrdersTable from "../../components/ordersTable/OrdersTable";
import axios from "../../api/axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashBoard = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  // let [orders, setOrders] = useState([
  //   {
  //     UserId: "1",
  //     Order_Date: "2023-06-19",
  //     OrderId: "ORD456",
  //     Total_Price: 39.99,
  //     Shipping_Address: {
  //       city: "New York",
  //       zip: "10001",
  //       country: "United States",
  //     },
  //   },
  //   {
  //     UserId: "2",
  //     Order_Date: "2023-06-18",
  //     OrderId: "ORD012",
  //     Total_Price: 25.99,
  //     Shipping_Address: {
  //       city: "London",
  //       zip: "WC1A 1AA",
  //       country: "United Kingdom",
  //     },
  //   },
  //   {
  //     UserId: "3",
  //     Order_Date: "2023-06-17",
  //     OrderId: "ORD678",
  //     Total_Price: 12.5,
  //     Shipping_Address: {
  //       city: "Paris",
  //       zip: "75000",
  //       country: "France",
  //     },
  //   },
  //   {
  //     UserId: "4",
  //     Order_Date: "2023-06-16",
  //     OrderId: "ORD234",
  //     Total_Price: 99.99,
  //     Shipping_Address: {
  //       city: "Tokyo",
  //       zip: "100-0001",
  //       country: "Japan",
  //     },
  //   },
  //   {
  //     UserId: "5",
  //     Order_Date: "2023-06-15",
  //     OrderId: "ORD890",
  //     Total_Price: 49.99,
  //     Shipping_Address: {
  //       city: "Sydney",
  //       zip: "2000",
  //       country: "Australia",
  //     },
  //   },
  //   {
  //     UserId: "6",
  //     Order_Date: "2023-06-14",
  //     OrderId: "ORD567",
  //     Total_Price: 14.99,
  //     Shipping_Address: {
  //       city: "Berlin",
  //       zip: "10115",
  //       country: "Germany",
  //     },
  //   },
  //   {
  //     UserId: "7",
  //     Order_Date: "2023-06-13",
  //     OrderId: "ORD123",
  //     Total_Price: 9.99,
  //     Shipping_Address: {
  //       city: "Toronto",
  //       zip: "M5V 2L7",
  //       country: "Canada",
  //     },
  //   },
  //   {
  //     UserId: "8",
  //     Order_Date: "2023-06-12",
  //     OrderId: "ORD789",
  //     Total_Price: 19.99,
  //     Shipping_Address: {
  //       city: "Rome",
  //       zip: "00100",
  //       country: "Italy",
  //     },
  //   },
  //   {
  //     UserId: "9",
  //     Order_Date: "2023-06-11",
  //     OrderId: "ORD345",
  //     Total_Price: 29.99,
  //     Shipping_Address: {
  //       city: "Moscow",
  //       zip: "101000",
  //       country: "Russia",
  //     },
  //   },
  //   {
  //     UserId: "10",
  //     Order_Date: "2023-06-10",
  //     OrderId: "ORD901",
  //     Total_Price: 34.99,
  //     Shipping_Address: {
  //       city: "Los Angeles",
  //       zip: "90001",
  //       country: "United States",
  //     },
  //   },
  //   {
  //     UserId: "11",
  //     Order_Date: "2023-06-09",
  //     OrderId: "ORD457",
  //     Total_Price: 39.99,
  //     Shipping_Address: {
  //       city: "New York",
  //       zip: "10001",
  //       country: "United States",
  //     },
  //   },
  //   {
  //     UserId: "12",
  //     Order_Date: "2023-06-08",
  //     OrderId: "ORD013",
  //     Total_Price: 25.99,
  //     Shipping_Address: {
  //       city: "London",
  //       zip: "WC1A 1AA",
  //       country: "United Kingdom",
  //     },
  //   },
  //   {
  //     UserId: "13",
  //     Order_Date: "2023-06-07",
  //     OrderId: "ORD679",
  //     Total_Price: 12.5,
  //     Shipping_Address: {
  //       city: "Paris",
  //       zip: "75000",
  //       country: "France",
  //     },
  //   },
  //   {
  //     UserId: "14",
  //     Order_Date: "2023-06-06",
  //     OrderId: "ORD235",
  //     Total_Price: 99.99,
  //     Shipping_Address: {
  //       city: "Tokyo",
  //       zip: "100-0001",
  //       country: "Japan",
  //     },
  //   },
  //   {
  //     UserId: "15",
  //     Order_Date: "2023-06-05",
  //     OrderId: "ORD891",
  //     Total_Price: 49.99,
  //     Shipping_Address: {
  //       city: "Sydney",
  //       zip: "2000",
  //       country: "Australia",
  //     },
  //   },
  //   {
  //     UserId: "16",
  //     Order_Date: "2023-06-04",
  //     OrderId: "ORD568",
  //     Total_Price: 14.99,
  //     Shipping_Address: {
  //       city: "Berlin",
  //       zip: "10115",
  //       country: "Germany",
  //     },
  //   },
  //   {
  //     UserId: "17",
  //     Order_Date: "2023-06-03",
  //     OrderId: "ORD124",
  //     Total_Price: 9.99,
  //     Shipping_Address: {
  //       city: "Toronto",
  //       zip: "M5V 2L7",
  //       country: "Canada",
  //     },
  //   },
  //   {
  //     UserId: "18",
  //     Order_Date: "2023-06-02",
  //     OrderId: "ORD790",
  //     Total_Price: 19.99,
  //     Shipping_Address: {
  //       city: "Rome",
  //       zip: "00100",
  //       country: "Italy",
  //     },
  //   },
  //   {
  //     UserId: "19",
  //     Order_Date: "2023-06-01",
  //     OrderId: "ORD346",
  //     Total_Price: 29.99,
  //     Shipping_Address: {
  //       city: "Moscow",
  //       zip: "101000",
  //       country: "Russia",
  //     },
  //   },
  //   {
  //     UserId: "20",
  //     Order_Date: "2023-05-31",
  //     OrderId: "ORD902",
  //     Total_Price: 34.99,
  //     Shipping_Address: {
  //       city: "Los Angeles",
  //       zip: "90001",
  //       country: "United States",
  //     },
  //   }
  // ]
  // );

  // const notify = () =>
  //   toast.success("Item Deleted Successfully!", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });

  const error = () =>
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  // let [orders, setOrders] = useState([]);

  async function fetchData() {
    try {
      // const response = await axios.get(`http://localhost:3000/orders`);
      // const token = auth.accesstoken;
      const token = auth.accessToken;

      console.log(token);
      console.log("hello,", auth.accessToken);
      // const response = await axios.get("http://localhost:3000/orders", null, {
      //   // headers: { Authorization: token },
      //   Authorization: `Bearer ${token}`,
      // });

      const response = await axios.get("http://localhost:3000/orders", {
        headers: {
          Authorization: ` ${token}`,
        },
      });
      console.log("hello admin");
      // Handle the response data
      console.log("fetching");
      console.log(response.data);
      // product = response.data.product;
      setOrders(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
  async function deleteItem(id) {
    try {
      const token = auth.accessToken;

      const response = await axios.delete(
        `http://localhost:3000/orders/${id}`,
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );
      console.log(response);

      notify();
      // Perform additional actions after successful deletion
    } catch (error) {
      error();
      // Handle any errors that occur during deletion
    }
  }

  async function updateItem(id) {
    try {
      const token = auth.accessToken;

      const response = await axios.patch(`http://localhost:3000/orders/${id}`, {
        data: "updated data",
        headers: {
          Authorization: ` ${token}`,
        },
      });
      console.log(response);
      console.log("Item updated successfully");
      // Perform additional actions after successful update
    } catch (error) {
      console.error("Error updating item:", error);
      // Handle any errors that occur during update
    }
  }

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // function deleteOrder(id) {
  //   deleteItem(id);
  //   let newOrders = [...orders];
  //   newOrders = newOrders.filter((order) => order._id != id);
  //   setOrders(newOrders);
  // }
  // function confirmOrder(id) {
  //   // updateItem(id);
  //   error();
  //   let newOrders = [...orders];
  //   newOrders = newOrders.filter((order) => order._id != id);
  //   setOrders(newOrders);
  // }

  return (
    <>
      {/* <ToastContainer />
      {orders.length !== 0 ? (
        <OrdersTable
          deleteOrder={deleteOrder}
          confirmOrder={confirmOrder}
          orders={orders}
        />
      ) : (
        <div className="flex justify-center align-middle h-screen w-full">
          <div className="loading loading-lg loading-spinner text-[#E9672B] "></div>
        </div>
      )} */}
    </>
  );
};

export default AdminDashBoard;
