import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';


const ImageSlider = () => {
    const [current,setCurrent]=useState('src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg');
    const [previous,setPrevious]=useState('src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg');
    let [images,changeImages]=useState([
        {id:1,className:'border cursor-pointer col-span-3 shadow rounded-full w-16 outline outline-2 outline-black cursor-pointer border-4 border-white',src:'src/assets/Images/ImageSlider/gea-cof-05_silo_1_2x3.jpg'},
        {id:2,className:'border cursor-pointer col-span-3 shadow rounded-full w-16',src:'src/assets/Images/ImageSlider/avif/gea-cof-05_detail_2_2x3.webp'},
        {id:3,className:'border cursor-pointer col-span-3 shadow rounded-full w-16',src:'src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_675457.webp'},
        {id:4,className:'border cursor-pointer col-span-3 shadow rounded-full w-16',src:'src/assets/Images/ImageSlider/avif/GEA-COF-05_scene_c89dc2.webp'},
        {id:5,className:'border cursor-pointer col-span-3 shadow rounded-full w-16',src:'src/assets/Images/ImageSlider/avif/gea-cof-05_silo_5_2x3.webp'}
    ])


    function handleSlider(e)
    {
        setPrevious(current);
        setCurrent(e.target.src);

    }

    function changeBorder(id)
    {
        images.forEach((image)=>{
            if(image.id==id)
            {
                changeImages((prevImages) => {
                    const newImages = [...prevImages]; // Create a new array
                    newImages[id-1] = { ...prevImages[id-1] };
                    newImages[id-1].className='border cursor-pointer col-span-3 shadow rounded-full w-16 outline outline-2 outline-black cursor-pointer border-4 border-white';
                    return newImages;})
            }
            else
            {
                changeImages((prevImages) => {
                    const newImages = [...prevImages]; // Create a new array
                    newImages[image.id-1] = { ...prevImages[image.id-1] };
                    newImages[image.id-1].className='border cursor-pointer col-span-3 shadow rounded-full w-16';
                    return newImages;
                })
            }
        })
        console.log(images);
    }

    function handleMouseOut()
    {
        setCurrent(previous);
    }
    return ( 
        
        <div className='flex-col justify-between border w-3/5 align-middle border-gray-900 col-span-8'>
            <div className='border col-span-12 mb-10' >
                <img className='border mx-auto' src={current}/>
            </div>
            <div className='flex justify-between gap-1 border col-span-12 h-16 mx-60'>
                {images.map((image)=><img key={image.id} id={image.id} src={image.src}  
                className={image.className} onMouseLeave={handleMouseOut} 
                onMouseEnter={handleSlider} onClick={(e)=>
                    {
                        handleSlider(e);
                        changeBorder(image.id);
                    }} />)}
            </div>
        </div>
        
     );
}
 
export default ImageSlider;