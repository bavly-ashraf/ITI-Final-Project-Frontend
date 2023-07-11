import React, { useContext, useEffect, useState } from 'react'
import FavouriteListItem from '../../components/favouriteListItem/FavouriteListItem';
import { AuthContext } from '../../context/AuthProvider';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import LoadingAnimation from '../../components/loadingAnimation/LoadingAnimation';


const FavouriteList = () => {
    const { auth } = useContext(AuthContext)
    const [favList, setFavList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { wishList } = (await axios.get("http://localhost:3000/users/getuser", { headers: { Authorization: auth?.accessToken } })).data;
                setFavList(wishList);
                setIsLoading(false);
            } catch (e) {
                toast.error("an error happened, please refresh and try again");
            }
        })();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.patch(`http://localhost:3000/products/unfav/${id}`, { status: "confirmed" }, { headers: { Authorization: auth.accessToken } })
            const deletedFavItem = favList.filter((el) => el._id != id);
            setFavList(deletedFavItem);
            toast.success("item deleted successfully");
        } catch (e) {
            toast.error("error deleting item, please refresh and try again")
        }
    }

    return (
        <>

            {isLoading? <div className='w-full'><LoadingAnimation /></div> : favList.length > 0?
            <>
            <div className='flex justify-center'>
            <h1 className='text-5xl custom-font custom-font-black !text-[2.5rem] text-black p-3'>Favourite List</h1>
            </div>
            <div className='flex justify-center md:justify-normal gap-5 m-6 flex-wrap'>
                {favList.map((item,idx) => <FavouriteListItem handleDelete={handleDelete} product={item} key={item._id} />)}
            </div> 
            </>:
            <div className='flex flex-col w-full items-center justify-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <h1 className='text-project-main-color custom-font custom-font-bold !text-4xl'>No items in your Favourite List yet</h1>
            </div> 

            }
        </>
    );
}

export default FavouriteList;