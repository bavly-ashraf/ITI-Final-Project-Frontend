import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Joi from 'joi';


const AddEditModal = ({edit,product,handleAdd,allCategories,handleEdit}) => {
    const [form,setForm] = useState({name:product?.name || "",description:product?.description || "",height:product?.height || "",width:product?.width || "",depth:product?.depth || "",price:product?.price || "",category:product?.category || "",vendor:product?.vendor || "",no_of_items_in_stock:product?.no_of_items_in_stock || "", availability:product?.availability});
    const [catName,setCatName] = useState("Choose category");
    const [availability,setAvailability] = useState(product?.availability || "Availability");
    const [validationErrors,setValidationErrors] = useState(undefined);

    const handleAction = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleFormAdd = ()=>{
                //Data Validation
                const schema = Joi.object({
                    name: Joi.string().required(),
                    description: Joi.string().required(),
                    height: Joi.number().required(),
                    width: Joi.number().required(),
                    depth: Joi.number().required(),
                    details_images: Joi.object().min(1).max(2).required(),
                    price: Joi.number().required(),
                    vendor: Joi.string().required(),
                    category: Joi.string().alphanum().required(),
                    photo_url: Joi.object().min(1).max(7).required(),
                    no_of_items_in_stock: Joi.number().integer().required()
                });
                const {name , description , height , width , depth , details_images , price , vendor , category , photo_url , no_of_items_in_stock} = form;
                const value = schema.validate({name , description , height , width , depth , details_images , price , vendor , category , photo_url , no_of_items_in_stock},{abortEarly:false});
                setValidationErrors(value.error?.details);
                if(!value.error){
                    handleAdd(form);
                    setForm({...form,name:product?.name || "",description:product?.description || "",height:product?.height || "",width:product?.width || "",depth:product?.depth || "",price:product?.price || "",category:product?.category || "",vendor:product?.vendor || "",no_of_items_in_stock:product?.no_of_items_in_stock || "", availability:product?.availability});
                    window.my_modal.close();
                }
    }

    const handleFormEdit = ()=>{
        //Data Validation
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            height: Joi.number().required(),
            width: Joi.number().required(),
            depth: Joi.number().required(),
            price: Joi.number().required(),
            vendor: Joi.string().required(),
            no_of_items_in_stock: Joi.number().integer().required(),
            availability: Joi.string().required()
        });
        const {name, description , height, width, depth , price , vendor, no_of_items_in_stock, availability } = form;
        const value = schema.validate({name, description , height, width, depth , price , vendor, no_of_items_in_stock, availability },{abortEarly:false});
        setValidationErrors(value.error?.details);
        if(!value.error){
            handleEdit(product._id,form)
            window.my_modal_edit[index].close();
        }
}
    return ( 
        <dialog id={`my_modal${edit?"_edit"+product._id:""}`} className="modal">
            <form method="dialog" encType="multipart/form-data" className="modal-box">
                <h3 className="font-bold text-lg">{edit? 'Edit product':'Add new product!'}</h3>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                {validationErrors && validationErrors.map((err)=><div className='bg-red-700 rounded-lg m-1' key={err.context.key}>{err.message}</div>)}
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
                            {allCategories.map((category)=><li onClick={()=>{setForm({...form,category:category._id});setCatName(category.name)}} key={category._id}><a>{category.name}</a></li>)}
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
                    <br />
                    <input name="photo_url" onChange={(e)=>{setForm({...form,[e.target.name]:e.target.files})}} className='input' type='file' accept="image/*" multiple/>
                    <br />
                    <label>Detailed Images:</label>
                    <br />
                    <input name="details_images" onChange={(e)=>{setForm({...form,[e.target.name]:e.target.files})}} className='input' type='file' accept="image/*" multiple/>
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
                    <div className='w-full flex justify-center'><Link to="/addcategory" className='link link-warning'>Want to Add/Edit Category?</Link></div>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <div className={`btn ${edit? "btn-warning": "btn-success"}`} onClick={edit? ()=>handleFormEdit():()=>handleFormAdd()}>{edit? "Edit":"Add"}</div>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default AddEditModal;