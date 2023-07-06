/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useState } from "react";
import DeleteModalConfirm from "../../components/deleteModalConfirm/DeleteModalConfirm";


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
  let pages = orders.length / noOfOrders > 1 ? Math.floor(orders.length / noOfOrders)+1 : Math.floor(orders.length / noOfOrders) ;


  function paginate(e, index) {
    setCurrentPage(index);
    setStartOrder(index * noOfOrders);
    endOrder = startOrder + noOfOrders - 1;
  }

  return (
    <>
      <DeleteModalConfirm 
      currentId={props.currentId} 
      showModal={props.showModal} 
      setShowModal={props.setShowModal}
      deleteItem={props.deleteItem}
      deleteItemFromTable={props.deleteItemFromTable}
      />
      <div className="grid grid-rows-8 h-screen w-screen">
        <div
          style={{ height: "650px" }}
          className="bg-[#FBF8F5] w-screen overflow-x-auto row-start-1 row-end-7  "
        >
          <table className="table-fixed ">
            <thead className="bg-[#F3F0EC]">
              <tr>
                <th>Order ID</th>
                <th>Ordered Items ID</th>
                <th>Address</th>
                <th>User Phone</th>
                <th>Order Status</th>
                <th>Price</th>
                <th>Order Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {orders.map((user, index) => {
                return index >= startOrder && index <= endOrder ? (
                  <>
                    <tr key={user._id} className="hover:bg-[#F3F0EC]">
                      <td>
                        <div className="m-4">{user._id}</div>
                      </td>
                      <td>
                        <div className="m-4">
                          {user.orderItems.map((item) => (
                            <div key={item}>{item}</div>
                          ))}
                        </div>
                      </td>
                      <td>
                        <div className="m-2">
                          <div>{user.Address}</div>,{user.city},{user.zip},
                          <div>{user.country}</div>
                        </div>
                      </td>
                      <td>
                        <div className="m-2">{user.phone}</div>
                      </td>
                      <td>
                        <div className="m-2">{user.status}</div>
                      </td>
                      <td>
                        <div className="m-2">{user.totalPrice}$</div>
                      </td>
                      <td>
                        <div className="m-2">{user.dateOfOrder}</div>
                      </td>
                      <th>
                        <button
                          onClick={() => {
                            props.confirmOrder(user._id);
                          }}
                          className="btn btn-ghost btn-xs rounded-full h-10 w-24 hover:bg-[#E9672B]"
                        >
                          Confirm
                        </button>
                      </th>
                      <th>
                        <button
                          onClick={() => {
                            props.deleteOrder(user._id);
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
        <div className="flex justify-center mb-10 row-start-7 row-end-8">
          <div className="join">
            {Array.from({ length: pages }).map((_, index) => (
              <input
                key={index}
                style={{
                  border: "none",
                  backgroundImage: "none",
                  outline: "none",
                }}
                className="!join-item btn focus:!ring-0 !outline-0 !border-none btn-square !bg-[#F3F0EC] !hover:bg-[#EA6C31] checked:!bg-[#EA6C31]"
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
    </>
  );
};

export default OrdersTable;
