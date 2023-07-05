import React from 'react'
import FavouriteListItem from '../../components/favouriteListItem/FavouriteListItem';

const FavouriteList = () => {
    const arr = [1,2,3,4,5,6,7,8,9,0];
    return ( 
        <>
            <h1 className='text-5xl text-black dark:text-white p-3'>Favourite List</h1>
            <div className='flex justify-center md:justify-normal gap-5 m-6 flex-wrap'>
            {arr.map(item=><FavouriteListItem key={item} />)}
            </div>
        </>
     );
}
 
export default FavouriteList;