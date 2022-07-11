import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    
  return (
    <>
        <div className='container-navbar'>
            <Link to='/' className='logo'><span># </span>Diego<span>Maidana</span></Link>
            <div className='containter-available'>
                <p className='logo-text'>I'm <span>Available</span> for work July 2022</p>
            </div>
            <Link to='/projects' className='cta'>
                Projects<i className="ri-arrow-right-line"></i>
            </Link>
        </div>
    </>
  )
}

export default Navbar