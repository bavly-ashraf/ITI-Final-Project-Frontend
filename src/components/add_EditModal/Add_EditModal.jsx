import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddEditModal = ({edit,product,handleAdd,allCategories,handleEdit}) => {
    const [form,setForm] = useState({name:product?.name || "",description:product?.description || "",details_images:"",height:product?.height || "",width:product?.width || "",depth:product?.depth || "",price:product?.price || "",category:product?.category || "",photo_url:"",vendor:product?.vendor || "",no_of_items_in_stock:product?.no_of_items_in_stock || "", availability:product?.availability});
    const [catName,setCatName] = useState("Choose category");
    const [availability,setAvailability] = useState(product?.availability || "Availability");

    const handleAction = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
        console.log({...form,[e.target.name]:e.target.value});
    }
    return ( 
        <dialog id={`my_modal${edit? "_edit": ""}`} className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{edit? 'Edit product':'Add new product!'}</h3>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <label htmlFor='prod_name' className='text-lg'>Name:</label>
                    <input name='name' onChange={handleAction} id='prod_name' type="text" placeholder="Product Name" defaultValue={edit? product?.name : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_description'>Description:</label>
                    <input name='description' onChange={handleAction} id='prod_description' type="text" placeholder="Product Description" defaultValue={edit? product?.description : ""} className="input input-bordered input-warning w-full m-2" />
                    <label htmlFor='prod_height'>Height:</label>
                    <input name='height' onChange={handleAction} id='prod_height' type="text" placeholder="Height" defaultValue={edit? product?.height : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <label htmlFor='prod_width'>Width:</label>
                    <input name='width' onChange={handleAction} id='prod_width' type="text" placeholder="Width" defaultValue={edit? product?.width : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <label htmlFor='prod_depth'>Depth:</label>
                    <input name='depth' onChange={handleAction} id='prod_depth' type="text" placeholder="Depth" defaultValue={edit? product?.depth : ""} className="input input-bordered input-warning w-2/12 max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_price'>Price:</label>
                    <input name='price' onChange={handleAction} id='prod_price' type="text" placeholder="Product Price" defaultValue={edit? product?.price : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    {edit ||
                    <>
                    <label htmlFor='prod_category'>Category:</label>
                    <details className="dropdown">
                        <summary className="m-1 btn">{catName}</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {allCategories.map((category)=><li onClick={()=>{setForm({...form,category:category._id});setCatName(category.name);console.log({...form,category:category._id})}} key={category._id}><a>{category.name}</a></li>)}
                        </ul>
                    </details>
                    <br />
                    </>
                    }
                    <label htmlFor='prod_vendor'>Vendor:</label>
                    <input name='vendor' onChange={handleAction} id='prod_vendor' type="text" placeholder="Product Vendor" defaultValue={edit? product?.vendor : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_stock'>No. of items in stock:</label>
                    <input name='no_of_items_in_stock' onChange={handleAction} id='prod_stock' type="text" placeholder="stock" defaultValue={edit? product?.no_of_items_in_stock : ""} className="input input-bordered input-warning w-3/12 max-w-xs m-2" />
                    <br />
                    {edit || 
                    <>
                    <label>Images:</label>
                    <input name='photo_url' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.files});console.log(form);}} className='input' type='file' accept="image/*" multiple/>
                    <br />
                    <label>Detailed Images:</label>
                    <input name='details_images' onChange={(e)=>{setForm({...form,[e.target.name]:e.target.files});console.log(form);}} className='input' type='file' accept="image/*" multiple/>
                    </>}
                    {edit &&
                    <>
                    <label htmlFor='prod_availability'>Availability:</label>
                    <details className="dropdown">
                        <summary className="m-1 btn">{availability}</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>{setForm({...form,availability:"available"});setAvailability("available");}}><a>Available</a></li>
                            <li onClick={()=>{setForm({...form,availability:"out of stock"});setAvailability("out of stock");}}><a>Out of stock</a></li>
                        </ul>
                    </details>
                    </>}
                    <br />
                    <Link to="/addcategory"><button className='btn btn-primary'>Want to Add/Edit Category?</button></Link>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <div className={`btn ${edit? "btn-warning": "btn-success"}`} onClick={edit? ()=>handleEdit("edit"):()=>handleAdd(form)}>{edit? "Edit":"Add"}</div>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default AddEditModal;