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
        <h1 className='text-5xl text-center text-black m-3'>Category Name</h1>
        <div className='flex'>
            <aside>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li>
                                <details open>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>level 2 item 1</a></li>
                                    <li><a>level 2 item 2</a></li>
                                </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="divider"></div> 
            </aside>
            <main>
                <div className='flex flex-wrap gap-4'>
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
                <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </main>
        </div>
        </>
     );
}
 
export default ProductListing;