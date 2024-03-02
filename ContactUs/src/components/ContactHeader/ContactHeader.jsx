import React from 'react'
import './ContactHeader.css'
import { IoCall } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";

const ContactHeader = () => {
  return (
    <div>
     <div className='heading'>
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
     </div >
        <div className='split' >
            <div>
                <div>
                    <div className='btn-g'>
                        <button className='btn'><MdOutlineChat /> VIA SUPPORT CHAT</button>
                        <button className='btn'><IoCall /> VIA CALL</button>
                    </div>
                    <button className='btn-lg'><MdOutlineChat /> VIA EMAIL FORM</button>
                </div>
                <form>
                    <div className='uform'>
                        <label>Name</label>
                        <input className='input' />
                    </div>
                    <div className='uform'>
                        <label >E-Mail</label>
                        <input className='input' />
                    </div>
                    <div className='uform'>
                        <label>Text</label>
                        <input className='input-text' />
                    </div>
                    <button className='btn btn-sub'>Submit</button>
                </form>
            </div>
            <div>
            <img src='/Images/contact.svg' alt='contact image' />
        </div>
        </div>
        
    </div>
  )
}

export default ContactHeader
