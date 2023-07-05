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
            const {data} = await axios.get('http://localhost:3000/products/all');
            setProducts(data);
            // console.log(data);
        })()
    }
    ,[]);

    // sorting
    const handleSorting = async(sortingOrder)=>{
        const {data} = await axios.get(`http://localhost:3000/products/${sortingOrder}`);
        // console.log(data);
        setProducts(data);
    }

    // filteration
    let min = 0;
    let max = Infinity;
    const handleFiltering = async(e)=>{
        switch(e.target.name){
            case "min" : min = e.target.value;
            break;
            case "max" : max = parseInt(e.target.value);
            break;
        }
        const x = await axios.get("http://localhost:3000/products/filter/all",{data:{category:"test",min,max}});
        console.log(x);
    }

    // search
    const handleSearch = async(e)=>{
        try{
            const {data} = await axios.get(`http://localhost:3000/products/?product=${e.target.value}`);
            setProducts(data);
        }catch(e){
            setProducts([])
        }
    }

    // pagination
    const PAGE_SIZE = 9;
    const noOfItems = products.length;
    const noOfPages = Math.ceil(noOfItems/PAGE_SIZE);
    const pageArr = range(noOfPages);
    const startProdNum = (currentPage -1) * PAGE_SIZE;
    const filteredProducts = products.slice(startProdNum,startProdNum+PAGE_SIZE);


    // adding new product
    const handleAdd = async(product)=>{
        console.log(product);
    }

    // editing product
    const handleEdit = async(id)=>{
        // const {updatedProduct} = await axios.patch(`http://localhost:3000/products/${id}`,)
        console.log(id);
    }

    // deleting product
    const handleDelete = async(id) =>{
        let indexOfDeletedProd;
        try{
            const {deletedProduct} = await axios.delete(`http://localhost:3000/products/${id}`).data;
            console.log(x);
            const productsClone = [...products];
            const deletedProductArr = productsClone.filter((prod,idx)=> {prod._id != id; indexOfDeletedProd = idx});
            setProducts(deletedProductArr);
        }catch(e){
            console.log(e);
        }
     }


    return ( 
        <>
        {/* Header */}
        <h1 className='text-5xl text-center text-black m-3 dark:text-white'>Category Name</h1>
        {/* Page Buttons (Add & sort) */}
        <div className='flex justify-end me-32 mt-16'>
            {isAdmin && <>
            <div onClick={()=>window.my_modal.showModal()} className='btn btn-success m-3'>Add New Product</div>
            <AddEditModal handleAdd={handleAdd} />
            </>}
            <details className="dropdown">
                <summary className="m-3 btn hover:bg-project-main-color hover:text-white">sort by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>handleSorting("highest")}>Price: High to Low</a></li>
                    <li><a onClick={()=>handleSorting("lowest")}>Price: Low to High</a></li>
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
                        <ul className="menu bg-base-200 rounded-box">
                        <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Search for certain product
                                </summary>
                                <ul>
                                    <li><input onChange={(e)=>handleSearch(e)} className='h-10 border-2 border-gray-500 focus:border-black w-11/12 p-3 m-auto' type='text' placeholder='Search' /></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Price</summary>
                                <ul>
                                    <form onChange={(e)=>handleFiltering(e)}>
                                        <li><input min={0} name='min' className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto mb-3' type='number' placeholder='min' /></li>
                                        <li><input min={0} name='max' className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto' type='number' placeholder='max' /></li>
                                    </form>
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
            <main className='flex flex-col w-full mx-4'>
                <div className='flex justify-center md:h-full md:justify-start flex-wrap gap-4'>
                {filteredProducts.length > 0? filteredProducts.map((product,idx)=><Product key={product._id} handleDelete={handleDelete} handleEdit={handleEdit} index={idx} product={product} isAdmin={isAdmin} />) : 
                <div className='flex flex-col w-full items-center justify-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <h1 className='text-project-main-color custom-font custom-font-bold !text-4xl'>No products to show</h1>
                </div>}
                </div>
                {pageArr.length > 1 && <div className="join my-4 flex justify-center w-full">
                    {pageArr.map((page)=><input key={page} onClick={()=>{setCurrentPage(page); scrollTo({left:'0px',top:'0px',behavior:"smooth"})}} className={`join-item btn btn-square ${currentPage == page && "!bg-project-main-color !text-white !border-project-main-color"}`} type="radio" name="options" aria-label={page} />)}
                </div>}
            </main>
        </div>
        </>
     );
}
 
export default ProductListing;