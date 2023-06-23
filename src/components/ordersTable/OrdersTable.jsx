import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useState } from "react";

const OrdersTable = (props) => {
  let orders = props.orders;
  let keys;
  if (orders.length != 0) {
    keys = Object.keys(orders[0]);
  }

  let [currentPage, setCurrentPage] = useState(0);
  let [startOrder, setStartOrder] = useState(0);
  let noOfOrders = 8;
  let endOrder = startOrder + noOfOrders - 1;
  let pages = Math.floor(orders.length / noOfOrders);
  pages++;

  function paginate(e, index) {
    setCurrentPage(index);
    setStartOrder(index * noOfOrders);
    endOrder = startOrder + noOfOrders - 1;
  }

  return (
    <>
      {orders.length != 0 ? (
        <div className="grid grid-rows-8 h-screen">
          <div className=" bg-[#FBF8F5] overflow-x-auto row-start-1 row-end-7 ">
            <table className="table">
              <thead className="bg-[#F3F0EC]">
                <tr>
                  {keys.map((key) => (
                    <th className="text-black text-lg" key={key}>
                      {key}
                    </th>
                  ))}
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {orders.map((user, index) => {
                  return index >= startOrder && index <= endOrder ? (
                    <>
                      <tr key={user.OrderId} className="hover:bg-[#F3F0EC]">
                        <td>
                          <div className="">{user.UserId}</div>
                        </td>
                        <td>
                          <div className="">{user.Order_Date}</div>
                        </td>
                        <td>
                          <div className="">{user.OrderId}</div>
                        </td>
                        <td>
                          <div className="">{user.Total_Price}$</div>
                        </td>
                        <td>
                          <div className="">
                            {user.Shipping_Address.city},
                            {user.Shipping_Address.country},
                            {user.Shipping_Address.zip}
                          </div>
                        </td>
                        <th>
                          <button
                            onClick={() => {
                              props.deleteOrder(user.OrderId);
                            }}
                            className="btn btn-ghost btn-xs rounded-full h-10 w-24 hover:bg-[#E9672B]"
                          >
                            Confirm
                          </button>
                        </th>
                        <th>
                          <button
                            onClick={() => {
                              props.deleteOrder(user.OrderId);
                            }}
                            className="btn btn-ghost btn-xs rounded-full h-10 w-24 hover:bg-[#E9672B]"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    </>
                  ) : (
                    ""
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mb-10  row-start-7 row-end-8">
            <div className="join">
              {Array.from({ length: pages }).map((_, index) => (
                <input
                  key={index}
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  onClick={(event) => paginate(event, index)}
                  aria-label={index + 1}
                  checked={index === currentPage}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center align-middle h-screen w-full">
          <div className="loading loading-lg loading-spinner text-[#E9672B] "></div>
        </div>
      )}
    </>
  );
};

export default OrdersTable;
