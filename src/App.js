import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Conponents/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conponents/Assets/Css/Style.css'
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import NavbarPage from './Pages/NavbarPage';
const App = () => {
  return (
    <BrowserRouter>
    <NavbarPage />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/resume' element={<ResumePage/>} />
        <Route path='/portfolios' element={<PortfoliosPage/>} />
        <Route path='/blogs' element={<BlogPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App