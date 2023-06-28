import React from 'react'

const AddEditModal = ({edit,index,product}) => {
    return ( 
        <dialog id={`my_modal${edit? "_edit": ""}`} className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{edit? 'Edit product':'Add new product!'}</h3>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <label htmlFor='prod_name' className='text-lg'>Product Name:</label>
                    <input id='prod_name' type="text" placeholder="Product Name" defaultValue={edit? product.name : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                    <br />
                    <label htmlFor='prod_description'>Product Description:</label>
                    <input id='prod_description' type="text" placeholder="Product Description" defaultValue={edit? product.description : ""} className="input input-bordered input-warning w-full m-2" />
                    <br />
                    <label htmlFor='prod_price'>Product Price:</label>
                    <input id='prod_price' type="text" placeholder="Product Price" defaultValue={edit? product.price : ""} className="input input-bordered input-warning w-full max-w-xs m-2" />
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <div className='btn' onClick={()=>console.log('hello')}>Hello</div>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default AddEditModal;