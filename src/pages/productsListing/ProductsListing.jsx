import React from 'react';
import Product from '../../components/product/Product'
import {range} from '../../utils/range';

const ProductListing = () => {

    // filteration

    // search

    // pagination
    const PAGE_SIZE = 9;
    const noOfItems = 30;
    const noOfPages = Math.ceil(noOfItems/PAGE_SIZE);
    console.log(range(noOfPages));


    return ( 
        <>
        <h1 className='text-5xl text-center text-black m-3 dark:text-white'>Category Name</h1>
        <div className='flex justify-end me-32'>
        <details className="dropdown">
            <summary className="m-1 btn hover:bg-project-main-color hover:text-black">sort by</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </details>
        </div>
        <div className='flex justify-between'>
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
                                <summary className='text-xl'>Item Type</summary>
                                <ul>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Coffee Table</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Media Console</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Desk</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Desk Chair</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Console</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Table Lamp</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Floor Lamp</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Bookcase</p></li>
                                    <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Rug</p></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <details open>
                                <summary className='text-xl'>Brand</summary>
                                <ul>
                                <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Feather</p></li>
                                <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>West Elm</p></li>
                                <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Floyd</p></li>
                                <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Fully</p></li>
                                <li><p><input type='checkbox' className='cursor-pointer accent-project-main-color'></input>Herman Miller</p></li>
                                </ul>
                                </details>
                            </li>
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
                                    <li><a>Living Room</a></li>
                                    <li><a>Bedroom</a></li>
                                    <li><a>Dining</a></li>
                                    <li><a>Home Office</a></li>
                                    <li><a>Decor</a></li>
                                    <li><a>Lighting</a></li>
                                    <li><a>Outdoor</a></li>
                                </ul>
                                </details>
                            </li>
                            <div className="divider"></div>
                            <a className='text-lg cursor-pointer underline'>Or, browse all furniture</a>
                        </ul>
                    </div>
                </div>
                
            </aside>
            <main className='flex flex-col items-center mx-4'>
                <div className='flex flex-wrap justify-center gap-4'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                </div>
                <div className="join my-4">
                    <input className="join-item btn btn-square checked:!bg-project-main-color checked:!border-project-main-color" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square checked:!bg-project-main-color checked:!border-project-main-color" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square checked:!bg-project-main-color checked:!border-project-main-color" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square checked:!bg-project-main-color checked:!border-project-main-color" type="radio" name="options" aria-label="4" />
                </div>
            </main>
        </div>
        </>
     );
}
 
export default ProductListing;