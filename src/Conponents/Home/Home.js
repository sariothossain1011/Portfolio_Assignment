import React from 'react'
import { BsFacebook,BsLinkedin,BsYoutube } from "react-icons/bs";
import { VscGithub} from "react-icons/vsc";
import { MdDownload} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home-body'>
    <div className="homedesign">
      <div className="items">
      <div className='text-section'>
        <h1>Hi ,I'm Saiot Hossain</h1>
        <h5>Full Stack Web Developer and Web Application specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic websites. Well versed in numerous programming languages JavaScript ES6 Nodejs, structured language HTML5 CSS3, Libraries REACT-JS With MongoDB Database.</h5>
      </div>
      <div className="media-link-section">
      
       <NavLink to="#"><BsFacebook className='incons'/></NavLink>
       <NavLink to="#"><BsLinkedin className='incons'/></NavLink>
       <NavLink to="#"><BsYoutube className='incons'/></NavLink>
       <NavLink to="#"><VscGithub className='incons'/></NavLink>
      </div>
      <div className="button-section">
        <button type='submit'><MdDownload className='download-icon'/> DOWNLOAD</button>
      </div>
      <div className="code">
        <span>" $ sudo pacman -S nodejs "</span>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home