import React, { useContext, useEffect, useState } from 'react';
import Product from '../../components/product/Product'
import {range} from '../../utils/range';
import axios from 'axios';
import AddEditModal from '../../components/add_EditModal/Add_EditModal';
import { AuthContext } from '../../context/AuthProvider';
import LoadingAnimation from '../../components/loadingAnimation/LoadingAnimation';
import { toast } from 'react-toastify';

const ProductListing = () => {
    const {auth} = useContext(AuthContext);

    const isAdmin = auth?.roles == "admin"? true:false;
    const [products, setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [allCategories,setAllCategories] = useState([]);
    const [currentCat,setCurrentCat] = useState({_id:0,name:"All Categories"});
    const [searchString,setSearchString] = useState("");
    const [selectedPrice,setSelectedPrice] = useState({min:0,max:Infinity});
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        (async()=>{
            //get products
            try{
            const {data} = await axios.get('http://localhost:3000/products/all');
            setIsLoading(false);
            setProducts(data);
            }catch(e){
                toast.error("error fetching product list, please refresh the page and try again")
            }
        })()
    }
    ,[]);

    useEffect(()=>{
        (async()=>{
            //get categories
            try{
                const {categories} = (await axios.get("http://localhost:3000/categories")).data;
                setAllCategories(categories);
            }catch(e){
                toast.error("error fetching category list, please refresh the page and try again")
            }
        })()
    }
    ,[]);

    // sorting
    const handleSorting = async(sortingOrder)=>{
        try{
            const {data} = await axios.get(`http://localhost:3000/products/${sortingOrder}`);
            setProducts(data);
        }catch(e){
            toast.error("error contacing the server, please refresh the page and try again")
        }
    }
    
    // filteration
    let filteredProducts = currentCat._id == 0? products : products.filter((el)=>el.category == currentCat._id);
    filteredProducts = filteredProducts.filter((product)=> product.price >= selectedPrice.min && product.price <= selectedPrice.max);

    // search
    const searchStringRegExp = new RegExp(searchString,"i")
    filteredProducts = (searchString == "")? filteredProducts : filteredProducts.filter((product)=>product.name.match(searchStringRegExp));

    // pagination
    const PAGE_SIZE = 12;
    const noOfItems = filteredProducts.length;
    const noOfPages = Math.ceil(noOfItems/PAGE_SIZE);
    const pageArr = range(noOfPages);
    const startProdNum = (currentPage -1) * PAGE_SIZE;
    filteredProducts = filteredProducts.slice(startProdNum,startProdNum+PAGE_SIZE);


    // adding new product
    const handleAdd = async(product)=>{
        
        //appending to formData
        const {name , description , height , width , depth , details_images , price , vendor , category , photo_url , no_of_items_in_stock} = product;
        const formData = new FormData();
        formData.append("name",name);
        formData.append("description",description);
        formData.append("height",height);
        formData.append("width",width);
        formData.append("depth",depth);
        for(let i=0;i<details_images.length;i++){
            formData.append("details_images",details_images[i]);
        }
        formData.append("price",price);
        formData.append("vendor",vendor);
        for(let i=0;i<photo_url.length;i++){
            formData.append("photo_url",photo_url[i]);
        }
        formData.append("no_of_items_in_stock",no_of_items_in_stock);

        //adding to database
        try
        {
            const addedProduct = (await axios.post(`http://localhost:3000/products/${category}`,formData,{headers:{Authorization:auth?.accessToken}})).data.product;
            //clone
            const newProdArr = [...products];
            //edit
            newProdArr.push(addedProduct);
            //setState
            setProducts(newProdArr);
            toast.success("product added successfully");
        }catch(e){
            toast.error("error adding the product, please try again")
        }
    }

    // editing product
    const handleEdit = async(id,product)=>{
        const fallBackClone = [...products];
        const {name, description , height, width, depth , price , vendor, no_of_items_in_stock, availability } = product;
        try{
            const {updatedProduct} = (await axios.patch(`http://localhost:3000/products/${id}`,{name, description , height, width, depth , price , vendor, no_of_items_in_stock, availability },{headers:{Authorization:auth?.accessToken}})).data
            const newProdArr = [...products];
            const index = newProdArr.findIndex((el)=>el._id == id);
            newProdArr[index] = updatedProduct
            setProducts(newProdArr);
            toast.success("product edited successfully");
        }catch(e){
            toast.error("error editing the product, please try again")
            setProducts(fallBackClone);
        }
    }

    // deleting product
    const handleDelete = async(id) =>{
        const productsClone = [...products];
        try{
            await axios.delete(`http://localhost:3000/products/${id}`,{headers:{Authorization:auth?.accessToken}});
            const deletedProductArr = productsClone.filter((prod)=>prod._id != id);
            setProducts(deletedProductArr);
            toast.success("product deleted successfully");
        }catch(e){
            toast.error("error deleting the product, please try again")
            setProducts(productsClone);
        }
     }


    return ( 
        <div >
        {/* Header */}
        <h1 className='!text-5xl text-center text-black m-5 custom-font custom-font-black'>{currentCat.name}</h1>
        {/* Page Buttons (Add & sort) */}
        <div className='flex justify-end me-32'>
            {isAdmin && <>
            <div onClick={()=>window.my_modal.showModal()} className='btn btn-success m-3'>Add New Product</div>
            <AddEditModal handleAdd={handleAdd} allCategories={allCategories} />
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
                    <div className="drawer-side pt-10 lg:pt-0 h-full">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu h-full bg-base-200 rounded-box">
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
                                    <li><input onChange={(e)=>{setSearchString(e.target.value);setCurrentPage(1)}} className='h-10 border-2 border-gray-500 focus:border-black w-11/12 p-3 m-auto' type='text' placeholder='Search' /></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Price</summary>
                                <ul>
                                    <form>
                                        <li><input min={0} onChange={(e)=>{e.target.value == ""? setSelectedPrice({...selectedPrice,min:0}) : setSelectedPrice({...selectedPrice,min:e.target.value});setCurrentPage(1)}} name='min' className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto mb-3' type='number' placeholder='min' /></li>
                                        <li><input min={0} onChange={(e)=>{e.target.value == ""? setSelectedPrice({...selectedPrice,max:Infinity}) : setSelectedPrice({...selectedPrice,max:e.target.value});setCurrentPage(1)}} name='max' className='h-10 border-2 border-gray-500 focus:border-black w-8/12 p-3 m-auto' type='number' placeholder='max' /></li>
                                    </form>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Shop by category</summary>
                                <ul>
                                    {allCategories.map((cat)=><li className={currentCat._id == cat._id? "bg-project-main-color":""} onClick={()=>{setCurrentCat(cat);setCurrentPage(1); scrollTo({left:'0px',top:'0px',behavior:"smooth"})}} key={cat._id}><a>{cat.name}</a></li>)}
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <a onClick={()=>{setCurrentCat({_id:0,name:"All Categories"});setCurrentPage(1); scrollTo({left:'0px',top:'0px',behavior:"smooth"})}} className={`text-lg cursor-pointer underline ${currentCat._id == 0? "bg-project-main-color":""}`}>Or, browse all furniture</a>
                        </ul>
                    </div>
                </div>
                
            </aside>
            {/* Products */}
            <main className='flex flex-col w-full mx-4'>
                <div className='flex justify-center md:h-full md:justify-start flex-wrap gap-4'>
                {isLoading? <div className='w-full'><LoadingAnimation /></div> : filteredProducts.length > 0? filteredProducts.map((product,idx)=><Product key={product._id} handleDelete={handleDelete} handleEdit={handleEdit} allCategories={allCategories} index={idx} product={product} isAdmin={isAdmin} />) : 
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
        </div>
     );
}
 
export default ProductListing;