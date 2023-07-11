import React from 'react'
import './FavouriteListItem.css';
import { Link } from 'react-router-dom';

const FavouriteListItem = ({ index, product, handleDelete }) => {
    return (
        <>
            {/* Favourite list item card */}
            <div className="container w-60">
                <img src={product.photo_url} alt="Product Image" className="image w-[240px] h-[240px]" />
                <div className="middle">
                    <h1 className='custom-font custom-font-medium text-2xl'>{product.name}</h1>
                    <Link to={`/products/product/${product._id}`} ><div className="btn text-black bg-white border-project-main-color hover:border-project-main-color hover:text-white hover:bg-project-main-color">Buy Now</div></Link>
                    <svg onClick={() => window[`my_modal_deleteFav${product._id}`].showModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="w-7 h-7 mt-3 m-auto cursor-pointer hover:stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
            {/* removeConfirmation modal */}
            <dialog id={`my_modal_deleteFav${[product._id]}`} className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Remove Confirmation!</h3>
                    <p className="py-4">{`Are you sure you want to remove [${product.name}] from your favourite list?`}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className='btn btn-error' onClick={() => handleDelete(product._id)}>Remove</button>
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    );
}

export default FavouriteListItem;