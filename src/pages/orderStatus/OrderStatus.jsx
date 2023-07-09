import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const OrderStatus = () => {
    const {auth} = useContext(AuthContext);
    const [orderStatusList,setOrderStatusList] = useState([]);

    useEffect(()=>{
        (async()=>{
            const {userOrders} = (await axios.get(`http://localhost:3000/orders/user/${auth?.user?._id}`)).data;
            setOrderStatusList(userOrders);
        })();
    },[auth?.user?._id]);


    const handleDelete = async(id)=>{
        try{
            await axios.delete(`http://localhost:3000/orders/${id}`,{headers:{Authorization:auth.accessToken}})
            const newOrderList = orderStatusList.filter((el)=> el._id != id);
            setOrderStatusList(newOrderList);
            toast.success("order cancelled successfully");
        }catch(e){
            toast.error("error cancelling the order, please refresh the page and try again");
        }
    }


    return ( 
        <>
                <div className='flex justify-center mb-5'>
                    <h1 className='text-5xl custom-font custom-font-black !text-[2.5rem] text-black p-3'>Orders Status</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Order Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Product Image" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Chair</div>
                                    <div className="text-sm opacity-50">Living room</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <span className='bg-gray-500 text-black rounded-xl p-2'>Pending</span>
                                </td>
                                <th>
                                <button onClick={()=>handleDelete()} className="btn hover:btn-error btn-xs">cancel order</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Chair</div>
                                    <div className="text-sm opacity-50">Living room</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <span className='bg-success text-black rounded-xl p-2'>Shipped</span>
                                </td>
                                <th>
                                <button className="btn hover:btn-error btn-xs">cancel order</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            {/* <tr>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Chair</div>
                                    <div className="text-sm opacity-50">Living room</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <span className='bg-error text-black rounded-xl p-2'>Rejected</span>
                                </td>
                                <th>
                                <button className="btn hover:btn-info btn-xs"><Link to='/ProductListing'>order another product?</Link></button>
                                </th>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
        </>
     );
}
 
export default OrderStatus;