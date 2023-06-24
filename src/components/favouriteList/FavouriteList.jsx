import React from 'react'

const FavouriteList = () => {
    return ( 
        <>
            <div className="card w-60 bg-base-100 shadow-xl image-full">
                <figure><img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Shoes" /></figure>
                <div className="card-body">
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
            </div>
        </>
     );
}
 
export default FavouriteList;