import React from 'react'
import OrderStatus from '../../components/orderStatus/OrderStatus';

const UserProfile = () => {
    return ( 
        <>
            <h1 className='text-5xl text-black dark:text-white p-3'>Orders Status</h1>
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
                        <OrderStatus />
                    </tbody>
                </table>
            </div>
            <h1 className='text-5xl text-black dark:text-white p-3'>Favourite List</h1>
        </>
     );
}
 
export default UserProfile;