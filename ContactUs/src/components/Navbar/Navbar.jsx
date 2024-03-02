import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    
        <nav className='container'>
            <div className='logo'>
                <img src='/Images/logo.png' alt='logo' />
            </div>  
            <ul>
                <li href="#" >Home</li>
                <li href="#" >LogIn</li>
                <li href="#" >Product</li>
            </ul>
        </nav>
  
  )
}
export default Navbar;