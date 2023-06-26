import React from 'react'
import './FavouriteListItem.css';

const FavouriteListItem = () => {
    return ( 
        <>
            {/* Favourite list item card */}
            <div className="container w-60">
                <img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Avatar" className="image w-[240px] h-[240px]" />
                <div className="middle">
                    <div className="btn text-black bg-white border-project-main-color hover:border-project-main-color hover:text-white hover:bg-project-main-color">Buy Now</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="w-7 h-7 mt-3 m-auto cursor-pointer hover:stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
            </div>
            {/* <div className="card w-60 bg-base-100 shadow-xl image-full">
                <figure className='w-[240px] h-[240px]'><img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Shoes" /></figure>
                <div className="card-body opacity-0 hover:opacity-100">
                    <div className='flex justify-between'>
                    <h2 className="card-title">Chair!</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-error cursor-pointer hover:fill-error hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <p>If a dog chews chairs whose chair does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-white border-2 border-project-main-color text-black hover:bg-project-main-color hover:border-project-main-color hover:text-white">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </>
     );
}
 
export default FavouriteListItem;