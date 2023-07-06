import { React, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import ReactDOM from "react-dom";
import { useState } from "react";
import OrdersTable from "../../components/ordersTable/OrdersTable";
import DeleteModalConfirm from "../../components/deleteModalConfirm/DeleteModalConfirm";
import axios from "../../api/axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashBoard = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

   const [showModal, setShowModal] = useState(false);

  let [currentId, setCurrentId] = useState(0);

  const notify = () =>
    toast.success("Item Deleted Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });



  const error = () =>
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  let [orders, setOrders] = useState([]);

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

      console.log("deleting...");
      const response = await axios.delete(`http://localhost:3000/orders/${id}`);

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

   useEffect(() => {
     fetchData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


  function deleteOrder(id) {
    setCurrentId(id);
    setShowModal(true);
  }

  function deleteItemFromTable(id)
  {
    let newOrders = [...orders];
    newOrders = newOrders.filter((order) => order._id != id);
    setOrders(newOrders);
  }
  function confirmOrder(id) {
    // updateItem(id);
    setCurrentId(id);
    setShowModal(true);
    error();
    let newOrders = [...orders];
    newOrders = newOrders.filter((order) => order._id != id);
    setOrders(newOrders);
  }


  return (
    <>
      <ToastContainer />
      {orders.length !== 0 ? (
        <OrdersTable
          deleteOrder={deleteOrder}
          confirmOrder={confirmOrder}
          orders={orders}
          showModal={showModal}
          setShowModal={setShowModal}
          currentId={currentId}
          deleteItem={deleteItem}
          deleteItemFromTable={deleteItemFromTable}
        />
      ) : (
        <div className="flex justify-center align-middle h-screen w-full">
          <div className="loading loading-lg loading-spinner text-[#E9672B] "></div>
        </div>
      )} 
    </>
  );
};

export default AdminDashBoard;
