import React from 'react'
import Navbar from '../navbar/Navbar'
import gitImg from '../assets/githubimg.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.webp'
import './contact.css'


const Contact = () => {
  return (
    <div className='op'>
      <Navbar/>
      <div className='flex-column'>

        <div className="container-contact">
          <div className="avatar-contact">
                <img src={gitImg} alt="github-img" />
          </div>
          <div className="avatar-contact">
                <img src={linkedin} alt="linkedin-img" />
          </div>
          <div className="avatar-contact">
                <img src={insta} alt="insta-img" />
          </div>
  
        </div>

        <div>
          <form className='flex-form'>
            <input type='text' className='input' placeholder='Name'/>
            <input type='email' className='input' placeholder='Email'/>
            <input type='text' className='input' placeholder='Title'/>
            <textarea placeholder='Message' className='textarea' rows="12" cols="50"></textarea>
            <button className='btn-form'>Contact me</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact