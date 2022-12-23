import React from 'react'
import { NavLink } from 'react-router-dom'
import Profile from '../Assets/Image/profile.jpg'
const Navbar = () => {
  return (

    <div className='nav-section'>
        <nav>
        <div className="img-section">
            <img src={Profile} alt="" />
        </div>
        <div className="navbar-intro">
        <ul>
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about">ABOUTS</NavLink>
            </li>
            <li>
                <NavLink to="/resume">RESUME</NavLink>
            </li>
            <li>
                <NavLink to="/portfolios">PORTFOLIOS</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">BLOGS</NavLink>
            </li>
            <li>
                <NavLink to="/contact">CONTACT</NavLink>
            </li>
            
        </ul>
        </div>
        <div className="nav-footer">
            <p>Copyright {new Date().getFullYear()} by Sariot</p>
        </div>
        </nav>
    </div>

  )
}

export default Navbar