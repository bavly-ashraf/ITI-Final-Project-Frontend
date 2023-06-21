import React from 'react'

const FavouriteList = () => {
    return ( 
        <>
            <div className="card w-60 bg-base-100 shadow-xl image-full">
                <figure><img src="https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBCSOSSS22_3D/$web_pdp_main_carousel_med$/220118124451/ojai-upholstered-wood-frame-accent-chair.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chair!</h2>
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