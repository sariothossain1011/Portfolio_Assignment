import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Conponents/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import NavbarPage from './Pages/NavbarPage';
// import "swiper/css/bundle";
import ErrorPage from './Pages/ErrorPage';
import SinglePortfoliosPage from './Pages/SinglePortfoliosPage';
import SingleBlogPage from './Pages/SingleBlogPage';
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <NavbarPage />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/resume' element={<ResumePage/>} />
        <Route path='/portfolios' element={<PortfoliosPage/>} />
        <Route path='/portfolios/:id' element={<SinglePortfoliosPage/>} />
        <Route path='/blogs' element={<BlogPage/>} />
        <Route path='/blogs/:id' element={<SingleBlogPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App