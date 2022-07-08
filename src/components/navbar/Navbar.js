import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    
  return (
    <>
        <div className='container-navbar'>
            <Link to='/home' className='logo'><span># </span>Diego<span>Maidana</span></Link>
            <div className='containter-available'>
                <p className='logo'>I'm <span>Available</span> for work July 2022</p>
            </div>
            <a href='mailto:diegoshhh@gmail.com' className='cta'>
                Contact<i className="ri-arrow-right-line"></i>
            </a>
        </div>
    </>
  )
}

export default Navbar