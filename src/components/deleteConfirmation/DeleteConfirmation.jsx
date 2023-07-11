import React from 'react'

const DeleteConfirmation = ({product,handleDelete}) => {
    return ( 
        <dialog id={`my_modal_delete${product?._id}`} className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Delete Confirmation!</h3>
                <p className="py-4">{`Are you sure you want to delete ${product?.name}?`}</p>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn btn-error' onClick={()=>handleDelete(product?._id)}>Delete</button>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default DeleteConfirmation;