import React from 'react'
import './ContactHeader.css'

const ContactHeader = () => {
  return (
    <div>
     <div>
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
     </div >
        <div className='split' >
            <div>
                <div>
                    <div>
                        <button>VIA SUPPORT CHAT</button>
                        <button>VIA CALL</button>
                    </div>
                    <button>VIA EMAIL FORM</button>
                </div>
                <form>
                    <div className='uform'>
                        <label>Name</label>
                        <input />
                    </div>
                    <div className='uform'>
                        <label>E-Mail</label>
                        <input />
                    </div>
                    <div className='uform'>
                        <label>Text</label>
                        <input />
                    </div>
                    <button>Submit</button>
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
