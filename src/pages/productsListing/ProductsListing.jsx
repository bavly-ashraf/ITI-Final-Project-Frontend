import React, { useEffect, useState } from 'react';
import Product from '../../components/product/Product'
import {range} from '../../utils/range';
import axios from 'axios';
import AddEditModal from '../../components/add_EditModal/Add_EditModal';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const isAdmin = true;
    const [products, setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get('http://localhost:3000/products');
            setProducts(data);
        })()
    }
    ,[]);

    // filteration

    // search

    // pagination
    const PAGE_SIZE = 9;
    const noOfItems = products.length;
    const noOfPages = Math.ceil(noOfItems/PAGE_SIZE);
    const pageArr = range(noOfPages);
    const startProdNum = (currentPage -1) * PAGE_SIZE;
    const filteredProducts = products.slice(startProdNum,startProdNum+PAGE_SIZE);


    return ( 
        <>
        {/* Header */}
        <h1 className='text-5xl text-center text-black m-3 dark:text-white'>Category Name</h1>
        {/* Page Buttons (Add & sort) */}
        <div className='flex justify-end me-32'>
        {isAdmin && <>
        <div onClick={()=>this.my_modal_1.showModal()} className='btn btn-success m-3'>Add New Product</div>
        <AddEditModal />
        </>}
        <details className="dropdown z-0">
            <summary className="m-3 btn hover:bg-project-main-color hover:text-white">sort by</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Price: High to Low</a></li>
                <li><a>Price: Low to High</a></li>
            </ul>
        </details>
        </div>
        {/* Products & Sidebar */}
        <div className='flex gap-6 mb-5'>
            {/* Sidebar */}
            <aside className='ms-3'>
                <div className="drawer h-full lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-2" className="btn border-2 border-project-main-color hover:text-white hover:bg-project-main-color hover:border-project-main-color text-black drawer-button mx-2 lg:hidden">Filter by</label>
                    
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Price</summary>
                                <ul>
                                    <li><input className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto mb-3' type='number' placeholder='min' /></li>
                                    <li><input className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto' type='number' placeholder='max' /></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Shop by category</summary>
                                <ul>
                                    <li><Link to="/">Living Room</Link></li>
                                    <li><Link to="/">Bedroom</Link></li>
                                    <li><Link to="/">Dining</Link></li>
                                    <li><Link to="/">Home Office</Link></li>
                                    <li><Link to="/">Decor</Link></li>
                                    <li><Link to="/">Lighting</Link></li>
                                    <li><Link to="/">Outdoor</Link></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <Link to="/" className='text-lg cursor-pointer underline'>Or, browse all furniture</Link>
                        </ul>
                    </div>
                </div>
                
            </aside>
            {/* Products */}
            <main className='flex flex-col items-center mx-4'>
                <div className='flex justify-center md:justify-start flex-wrap gap-4'>
                {filteredProducts.map((product)=><Product key={product.id} product={product} isAdmin={isAdmin} />)}
                </div>
                {pageArr.length > 1 && <div className="join my-4 m-auto">
                    {pageArr.map((page)=><input key={page} onClick={()=>{setCurrentPage(page); scrollTo({left:'0px',top:'0px',behavior:"smooth"})}} className={`join-item btn btn-square ${currentPage == page && "!bg-project-main-color !text-white !border-project-main-color"}`} type="radio" name="options" aria-label={page} />)}
                </div>}
            </main>
        </div>
        </>
     );
}
 
export default ProductListing;