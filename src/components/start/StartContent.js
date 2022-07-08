import React from 'react'
import { Link } from 'react-router-dom'
import './started.css'

const StartContent = () => {

  return (
    <div className='container-button-start'>
        <div>
            <p className='text-title'>Front-End Developer</p>
        </div>
        <div className='content'>
            <div className='line'>
                <p className='text-main'>Typescript</p>
            </div>
            <div className='line'>
                <p className='text-main'>React Native</p>
            </div>
            <div className='line'>
                <p className='text-main'>React Js</p>
            </div>
        </div>
        <div className='content'>
            <div className='line'>
                <p className='text-main'>Mobile apps</p>
            </div>
            <div className='line'>
                <p className='text-main'>Web Sites</p>
            </div>
        </div>

        <Link 
            to='/home'
            className='submit btn-float-start gradient-text' 
            >Start
        </Link>

        <div className='content'>
            <div className='line'>
                <p className='text-main'>Github</p>
            </div>
            <div className='line'>
                <p className='text-main'>Firebase</p>
            </div>
        </div>
        <div className='content'>
            <div className='line'>
                <p className='text-main'>bootstrap</p>
            </div>
            <div className='line'>
                <p className='text-main'>Material Design</p>
            </div>
            <div className='line'>
                <p className='text-main'>Javascript </p>
            </div>
        </div>
    </div>
  )
}

export default StartContent