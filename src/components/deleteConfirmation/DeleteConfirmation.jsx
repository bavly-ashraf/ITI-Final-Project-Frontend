import React from 'react'

const DeleteConfirmation = ({product}) => {
    return ( 
        <dialog id="my_modal_delete" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Delete Confirmation!</h3>
                <p className="py-4">{`Are you sure you want to delete ${product?.name}?`}</p>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <div className='btn btn-error' onClick={()=>console.log('hello')}>Delete</div>
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>
     );
}
 
export default DeleteConfirmation;