import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthProvider";
import axios from "../../api/axios";
import OrdersTable from "../../components/ordersTable/OrdersTable";
import DeleteModalConfirm from "../../components/deleteModalConfirm/DeleteModalConfirm";

const AdminDashboard = () => {
  const { auth } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const notify = () =>
    toast.success("Item Deleted Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const error = () =>
    toast.error("Error Notification!", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const fetchData = async () => {
    try {
      const token = auth.accessToken;
      const response = await axios.get("http://localhost:3000/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const token = auth.accessToken;
      const response = await axios.delete(`http://localhost:3000/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      notify();
    } catch (error) {
      error();
    }
  };

  const updateItem = async (id) => {
    try {
      const token = auth.accessToken;
      const response = await axios.patch(
        `http://localhost:3000/orders/${id}`,
        {
          data: "updated data",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      console.log("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const deleteOrder = (orderId) => {
    setCurrentId(orderId);
    setShowModal(true);
  };

  const deleteItemFromTable = (id) => {
    const newOrders = orders.filter((order) => order._id !== id);
    setOrders(newOrders);
  };

  const confirmOrder = (id) => {
    setCurrentId(id);
    setShowModal(true);
    error();
    const newOrders = orders.filter((order) => order._id !== id);
    setOrders(newOrders);
  };

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

export default AdminDashboard;
