import React, { useState } from 'react'
import StartContent from '../start/StartContent'
import './start.css'

const Started = () => {

  const [inicializando, setInicializando] = useState(true)

  setTimeout(() => {
    setInicializando(false)
  }, 6000);

  return (
    <>
        {
          inicializando ?
          (
            <div className='opacityStart'>
              <div className='w-20'>
                  <h6 className='front-border'>Diego Maidana</h6>
                  <h6 className='border-front'>Diego Maidana</h6>
              </div>
            </div>
          )
          :
          (
            <div className='op'>
              <StartContent/>
            </div>
          )

        }
    </>
  )
}

export default Started