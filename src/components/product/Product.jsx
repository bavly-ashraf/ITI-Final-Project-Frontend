import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../deleteConfirmation/DeleteConfirmation';
import AddEditModal from '../add_EditModal/Add_EditModal';

const Product = ({handleDelete,handleEdit,product,isAdmin,allCategories}) => {
    return ( 
        <>
        {/* hover:-translate-y-6 */}
        <div className={`w-72 bg-white pb-2 rounded-xl h-[25rem] ${isAdmin? "hover:scale-105" : "hover:-translate-y-3"} ease-in-out duration-300`}> 
            <Link to={`/products/product/${product?._id}`}><figure><img className='rounded-xl w-[288px] h-[288px]' src={product?.photo_url[0]} alt={product?.name} /></figure></Link>
            <div className="flex justify-center w-full">
            <h2 className="card-title px-2 text-black">
                {product?.name}
                {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            </div>
            {/* <p className='text-black px-2'>{product?.description}</p> */}
            <p className='text-project-main-color text-xl font-bold text-center py-2'>{product?.price+"EGP"}</p>
            <div className='flex justify-evenly text-black'>
                {isAdmin?
                <>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>window[`my_modal_edit${product?._id}`].showModal()} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="blue" className="w-8 h-8 cursor-pointer hover:stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <AddEditModal allCategories={allCategories} product={product} handleEdit={handleEdit} edit={true} />
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>window[`my_modal_delete${product?._id}`].showModal()} fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="w-8 h-8 cursor-pointer hover:stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                <DeleteConfirmation handleDelete={handleDelete} product={product} />
                </>
                :
                <>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer hover:text-project-main-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer hover:text-project-main-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg> */}
                </>}
            </div>
        </div>

        </>
     );
}
 
export default Product;