import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import OrdersTable from "../../components/ordersTable/OrdersTable";

const AdminDashBoard = () => {
  const [orders, setOrders] = useState([
    {
      UserId: "1",
      Order_Date: "2023-06-19",
      OrderId: "ORD456",
      Total_Price: 39.99,
      Shipping_Address: {
        city: "New York",
        zip: "10001",
        country: "United States",
      },
    },
    {
      UserId: "2",
      Order_Date: "2023-06-18",
      OrderId: "ORD012",
      Total_Price: 25.99,
      Shipping_Address: {
        city: "London",
        zip: "WC1A 1AA",
        country: "United Kingdom",
      },
    },
    {
      UserId: "3",
      Order_Date: "2023-06-17",
      OrderId: "ORD678",
      Total_Price: 12.5,
      Shipping_Address: {
        city: "Paris",
        zip: "75000",
        country: "France",
      },
    },
    {
      UserId: "4",
      Order_Date: "2023-06-16",
      OrderId: "ORD234",
      Total_Price: 99.99,
      Shipping_Address: {
        city: "Tokyo",
        zip: "100-0001",
        country: "Japan",
      },
    },
    {
      UserId: "5",
      Order_Date: "2023-06-15",
      OrderId: "ORD890",
      Total_Price: 49.99,
      Shipping_Address: {
        city: "Sydney",
        zip: "2000",
        country: "Australia",
      },
    },
    {
      UserId: "6",
      Order_Date: "2023-06-14",
      OrderId: "ORD567",
      Total_Price: 14.99,
      Shipping_Address: {
        city: "Berlin",
        zip: "10115",
        country: "Germany",
      },
    },
    {
      UserId: "7",
      Order_Date: "2023-06-13",
      OrderId: "ORD123",
      Total_Price: 9.99,
      Shipping_Address: {
        city: "Toronto",
        zip: "M5V 2L7",
        country: "Canada",
      },
    },
    {
      UserId: "8",
      Order_Date: "2023-06-12",
      OrderId: "ORD789",
      Total_Price: 19.99,
      Shipping_Address: {
        city: "Rome",
        zip: "00100",
        country: "Italy",
      },
    },
    {
      UserId: "9",
      Order_Date: "2023-06-11",
      OrderId: "ORD345",
      Total_Price: 29.99,
      Shipping_Address: {
        city: "Moscow",
        zip: "101000",
        country: "Russia",
      },
    },
    {
      UserId: "10",
      Order_Date: "2023-06-10",
      OrderId: "ORD901",
      Total_Price: 34.99,
      Shipping_Address: {
        city: "Los Angeles",
        zip: "90001",
        country: "United States",
      },
    },
    {
      UserId: "11",
      Order_Date: "2023-06-09",
      OrderId: "ORD457",
      Total_Price: 39.99,
      Shipping_Address: {
        city: "New York",
        zip: "10001",
        country: "United States",
      },
    },
    {
      UserId: "12",
      Order_Date: "2023-06-08",
      OrderId: "ORD013",
      Total_Price: 25.99,
      Shipping_Address: {
        city: "London",
        zip: "WC1A 1AA",
        country: "United Kingdom",
      },
    },
    {
      UserId: "13",
      Order_Date: "2023-06-07",
      OrderId: "ORD679",
      Total_Price: 12.5,
      Shipping_Address: {
        city: "Paris",
        zip: "75000",
        country: "France",
      },
    },
    {
      UserId: "14",
      Order_Date: "2023-06-06",
      OrderId: "ORD235",
      Total_Price: 99.99,
      Shipping_Address: {
        city: "Tokyo",
        zip: "100-0001",
        country: "Japan",
      },
    },
    {
      UserId: "15",
      Order_Date: "2023-06-05",
      OrderId: "ORD891",
      Total_Price: 49.99,
      Shipping_Address: {
        city: "Sydney",
        zip: "2000",
        country: "Australia",
      },
    },
    {
      UserId: "16",
      Order_Date: "2023-06-04",
      OrderId: "ORD568",
      Total_Price: 14.99,
      Shipping_Address: {
        city: "Berlin",
        zip: "10115",
        country: "Germany",
      },
    },
    {
      UserId: "17",
      Order_Date: "2023-06-03",
      OrderId: "ORD124",
      Total_Price: 9.99,
      Shipping_Address: {
        city: "Toronto",
        zip: "M5V 2L7",
        country: "Canada",
      },
    },
    {
      UserId: "18",
      Order_Date: "2023-06-02",
      OrderId: "ORD790",
      Total_Price: 19.99,
      Shipping_Address: {
        city: "Rome",
        zip: "00100",
        country: "Italy",
      },
    },
    {
      UserId: "19",
      Order_Date: "2023-06-01",
      OrderId: "ORD346",
      Total_Price: 29.99,
      Shipping_Address: {
        city: "Moscow",
        zip: "101000",
        country: "Russia",
      },
    },
    {
      UserId: "20",
      Order_Date: "2023-05-31",
      OrderId: "ORD902",
      Total_Price: 34.99,
      Shipping_Address: {
        city: "Los Angeles",
        zip: "90001",
        country: "United States",
      },
    }
  ]
  );


  
  function deleteOrder(id)
  {
    let newOrders=[...orders];
    newOrders=newOrders.filter((order)=>order.OrderId!=id);
    setOrders(newOrders);

  }
  return <OrdersTable deleteOrder={deleteOrder} orders={orders} />;
};

export default AdminDashBoard;
