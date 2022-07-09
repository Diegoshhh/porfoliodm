import React from 'react'
import gitImg from '../assets/githubimg.png'
import gmail from '../assets/gmail.png'
import arrow from '../assets/arroww.png'
import { Link } from 'react-router-dom'
import './main.css'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.webp'

const Main = () => {

  return (
    <>
        <div className='container-general-main'>
            
            <div className='content-main'>
                <p className='text-everyone'>Hi everyone!</p>
                <p className='text-name light'>I'm Diego Maidana.</p>
                <p className='text-name'>I build mobile apps and web sites.</p>
                <div className='text-content'>
                    <p className='text-presentation'>Welcome to my portfolio, I'm a front end developer. lover of     technology, innovation and constant learning. A couple of years ago I discovered the world of programming and from that moment I knew that it was where I wanted to belong.
                    </p>
                </div>
                <div className='content-resume'>
                    <button className='btn-resume'>Download CV</button>
                </div>
            </div>

            <Link to='/projects' className='content-arrow'>
                <img className='arrow' src={arrow} alt='flecha'/>
            </Link>

            <div className='avatars-row'>
                <div className="container-contact">
                    <a href='https://www.linkedin.com/in/diego-maidana-480444184/' className="avatar-contact">
                        <img src={linkedin} alt="linkedin-img" />
                    </a>
                    <a href='mailto:diegoshhh@gmail.com' className="avatar-contact">
                        <img src={gmail} alt="gmail" />
                    </a>
                    <a href='https://github.com/Diegoshhh?tab=repositories' className="avatar-contact">
                        <img src={gitImg} alt="github-img" />
                    </a>
                    <a href='https://www.instagram.com/diegoshmaidana/' className="avatar-contact">
                        <img src={insta} alt="insta-img" />
                    </a>
            
                </div>
            </div>
        </div>
    </>
  )
}

export default Main
