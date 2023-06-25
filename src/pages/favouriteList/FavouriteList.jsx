import React from 'react'
import FavouriteListItem from '../../components/favouriteListItem/FavouriteListItem';

const FavouriteList = () => {
    return ( 
        <>
            <h1 className='text-5xl text-black dark:text-white p-3'>Favourite List</h1>
            <div className='flex justify-center md:justify-normal gap-5 m-6 flex-wrap'>
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            <FavouriteListItem />
            </div>
        </>
     );
}
 
export default FavouriteList;