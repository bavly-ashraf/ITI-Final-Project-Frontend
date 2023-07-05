import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddEditModal = ({edit,product,handleAdd,handleEdit}) => {
    const [form,setForm] = useState({name:product?.name || "",details:{description:product?.details?.description || "",details_images:"",dimensions:{height:product?.details?.dimensions?.height || "",width:product?.details?.dimensions?.width || "",depth:product?.details?.dimensions?.depth || ""}},price:product?.price || "",category:product?.category || "",photo_url:"",vendor:product?.vendor || "",no_of_items_in_stock:product?.no_of_items_in_stock || "", availability:product?.availability});
    const handleAction = (e)=>{
        const newDataObj = {...form,[e.target.name]:e.target.value};
        console.log(newDataObj);
        setForm(newDataObj);
    }
    return ( 
        <dialog id={`my_modal${edit? "_edit": ""}`} className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{edit? 'Edit product':'Add new product!'}</h3>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <label htmlFor='prod_name' className='text-lg'>Name:</label>
                    <input name='name' onChange={(e)=>handleAction(e)} id='prod_name' type="text" placeholder="Product Name" defaultValue={edit? product?.name : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_description'>Description:</label>
                    <input name='details.description' onChange={(e)=>handleAction(e)} id='prod_description' type="text" placeholder="Product Description" defaultValue={edit? product?.details?.description : ""} className="input input-bordered input-warning w-full m-2" />
                    <label htmlFor='prod_height'>Height:</label>
                    <input name='details.dimensions.height' onChange={(e)=>handleAction(e)} id='prod_height' type="text" placeholder="Height" defaultValue={edit? product?.details?.dimensions?.height : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <label htmlFor='prod_width'>Width:</label>
                    <input name='details.dimensions.width' onChange={(e)=>handleAction(e)} id='prod_width' type="text" placeholder="Width" defaultValue={edit? product?.details?.dimensions?.width : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <label htmlFor='prod_depth'>Depth:</label>
                    <input name='details.dimensions.depth' onChange={(e)=>handleAction(e)} id='prod_depth' type="text" placeholder="Depth" defaultValue={edit? product?.details?.dimensions?.depth : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_price'>Price:</label>
                    <input name='price' onChange={(e)=>handleAction(e)} id='prod_price' type="text" placeholder="Product Price" defaultValue={edit? product?.price : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_category'>Category:</label>
                    <details className="dropdown">
                        <summary className="m-1 btn">Choose category</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                    <br />
                    <label htmlFor='prod_vendor'>Vendor:</label>
                    <input name='vendor' onChange={(e)=>handleAction(e)} id='prod_vendor' type="text" placeholder="Product Vendor" defaultValue={edit? product?.vendor : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_stock'>No. of items in stock:</label>
                    <input name='no_of_items_in_stock' onChange={(e)=>handleAction(e)} id='prod_stock' type="text" placeholder="stock" defaultValue={edit? product?.no_of_items_in_stock : ""} className="input input-bordered input-warning w-3/12 max-w-xs m-2" />
                    <br />
                    {edit || 
                    <>
                    <label>Images:</label>
                    <input name='photo_url' onChange={(e)=>handleAction(e)} className='input' type='file' accept="image/*" multiple/>
                    <br />
                    <label>Detailed Images:</label>
                    <input name='details.details_images' onChange={(e)=>handleAction(e)} className='input' type='file' accept="image/*" multiple/>
                    </>}
                    {edit &&
                    <>
                    <label htmlFor='prod_availability'>Availability:</label>
                    <details className="dropdown">
                        <summary className="m-1 btn">Choose category</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Available</a></li>
                            <li><a>Out of stock</a></li>
                        </ul>
                    </details>
                    </>}
                    <br />
                    <Link to="/addcategory"><button className='btn btn-primary'>Want to Add/Edit Category?</button></Link>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <div className='btn' onClick={edit? ()=>handleEdit("edit"):()=>handleAdd(form)}>{edit? "Edit":"Add"}</div>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default AddEditModal;