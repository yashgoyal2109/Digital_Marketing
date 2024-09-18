import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

function AddDiscount() {
    return (
        <>
            <div className='text-black gap-6 font-semibold flex flex-col'>
                <h1>How much discount would you like to Offer??</h1>
                <div className='flex gap-2'>
                    <input className='border-2 border-black w-[5%]' type="text" />
                    <p>%</p>
                </div>
                <div>
                    <button className='border-2 border-black px-2'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddDiscount