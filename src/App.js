import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/Home';
import ProjectsPage from './components/projectsPage/ProjectsPage';
import Started from './components/started/Started'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Started/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App