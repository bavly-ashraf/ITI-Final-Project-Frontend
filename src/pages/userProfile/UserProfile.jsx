import React from 'react'
import OrderStatus from '../../components/orderStatus/OrderStatus';
import FavouriteList from '../../components/favouriteList/FavouriteList';

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
            <div className='flex justify-center md:justify-normal gap-5 m-6 flex-wrap'>
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />
            <FavouriteList />

            </div>
        </>
     );
}
 
export default UserProfile;