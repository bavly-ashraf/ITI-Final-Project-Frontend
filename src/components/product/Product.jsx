import React from 'react';
import './Product.css';

const Product = ({product}) => {
    return ( 
        <>
        {/* hover:-translate-y-6 */}
        <div className='w-72 bg-white pb-2 rounded-xl hover:scale-105 ease-in-out duration-300'> 
            <figure><img className='rounded-xl w-[288px] h-[288px]' src={product?.Img} alt={product?.name} /></figure>
            <h2 className="card-title px-2 text-black">
                {product?.name}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className='text-black px-2'>{product?.description}</p>
            <p className='text-project-main-color text-xl font-bold text-center py-2'>{product?.price}</p>
            <div className='flex justify-evenly text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer hover:text-project-main-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer hover:text-project-main-color">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
        </div>
        </>
     );
}
 
export default Product;