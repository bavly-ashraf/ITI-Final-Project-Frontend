import React from 'react'

const AddEditModal = ({edit}) => {
    return ( 
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">{edit? 'Edit product':'Add new product!'}</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
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