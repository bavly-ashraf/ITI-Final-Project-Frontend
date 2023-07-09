import React, { useContext, useEffect, useState } from 'react'
import FavouriteListItem from '../../components/favouriteListItem/FavouriteListItem';
import { AuthContext } from '../../context/AuthProvider';
import axios from '../../api/axios';
import { toast } from 'react-toastify';


const FavouriteList = () => {
    const {auth} = useContext(AuthContext);
    const [favList,setFavList] = useState(auth.user.wishList || []);

    const handleDelete = async(id)=>{
        try{
            await axios.patch(`http://localhost:3000/products/unfav/${id}`,{status: "confirmed"},{headers:{Authorization:auth.accessToken}})
            const deletedFavItem = favList.filter((el)=>el._id != id);
            setFavList(deletedFavItem);
            toast.success("item deleted successfully");
        }catch(e){
            toast.error("error deleting item, please refresh and try again")
        }
    }

    return (
        <>
            <div className='flex justify-center'>
            <h1 className='text-5xl custom-font custom-font-black !text-[2.5rem] text-black p-3'>Favourite List</h1>
            </div>
            <div className='flex justify-center md:justify-normal gap-5 m-6 flex-wrap'>
                {favList.map(item => <FavouriteListItem handleDelete={handleDelete} product={item} key={item._id} />)}
            </div>
        </>
    );
}

export default FavouriteList;