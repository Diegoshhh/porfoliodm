import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import cssImg from '../assets/css.webp'
import htmlImg from '../assets/html5.png'
import javascriptImg from '../assets/jsjs.jpg'
import reactImg from '../assets/reactjs.png'
import gitImg from '../assets/githubimg.png'
import typescript from '../assets/ts.png'
import './projectsPage.css'
// import 'boxicons'
import arrowUp from '../assets/arrow-up.png'

const ProjectsPage = () => {

  const [newPage, setNewPage] = useState(false)


  const goToNewPage = () => {
    setNewPage(!newPage)
  }


  

  return (
    <div className='op'>
      <Navbar/>
      <div className='flex-row'>

        <h3 className='titulo-galery'>Each project is unique, show it to the world.</h3>
        
        {
          newPage ? 
          (
            <div className="container-card reload">
            <div className="card1 flex">
                <div>
                  <h3 className="title1">CRUD</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div>
              </div>
              <div className="card1 flex">
                <div>
                  <h3 className="title1">Cotizador</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div>
              </div>

              <div className="card1 flex">
                <div>
                  <h3 className="title1">Escuela de Fuerza</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div>
              </div> 
            </div>
          )
          :
          (
            
            <div className="container-card reload">
              <div className="card1 flex">
                <div>
                  <h3 className="title1">School of Strench</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div>
              </div>
              
              <div className="card1 flex">
                <div>
                  <h3 className="title1">Ecommerce</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div>
              </div>

              <div className="card1 flex">
                <div>
                  <h3 className="title1">Restaurant</h3>
                  <div className="bar">
                      <div className="emptybar"></div>
                      <div className="filledbar"></div>
                  </div>
                </div>
                {/* <div className='container-git-site'>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="github"></box-icon>
                  </div>
                  <div className='icono'>
                    <box-icon  color='#FFF' type='logo' name="chrome"></box-icon>
                  </div>
                </div> */}
              </div>
            </div>
          )
        }

          <div className="container-skills">
            <div className="container-skills">
              <div className="avatar">
                  <img src={cssImg} alt="Skytsunami" />
              </div>
          
              <div className="container">
                  <div className="avatar">
                      <img src={htmlImg} alt="Skytsunami" />
                  </div>
              </div>
              <div className="container">
                  <div className="avatar">
                      <img src={javascriptImg} alt="Skytsunami" />
                  </div>
              </div>
            </div>

            <div to='/projects' className='content-arrow-projects' onClick={goToNewPage}>
                <img  className='arrow-projects1' src={arrowUp} alt='flecha'/>
                <img  className='arrow-projects2' src={arrowUp} alt='flecha'/>
            </div>

            <div className="container-skills">
                <div className="container">
                    <div className="avatar">
                        <img src={reactImg} alt="Skytsunami" />
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <img src={typescript} alt="Skytsunami" />
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <img src={gitImg} alt="Skytsunami" />
                    </div>
                </div>
            </div> 

          </div>
      </div>
    </div>
  )
}

export default ProjectsPage