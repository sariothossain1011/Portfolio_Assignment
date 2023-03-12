import React from 'react'
import { BsFacebook,BsLinkedin,BsYoutube } from "react-icons/bs";
import { VscGithub} from "react-icons/vsc";
import { MdDownload} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home-body'>
    <div className="home-items">
      <div className='text-section'>
        <h1>HI ,I'M <span>SARIOT HOSSAIN</span></h1>
        <p>"I am a web developer with three years of experience. I have expertise in HTML, CSS, Bootstrap, Tailwin css,  JavaScript ES6, React.js, Redux, Next.js ,Node.js, express.js, MongoDB, Mongoose , Agggregate, Data Structure, Algorithm and am passionate about creating beautiful and functional websites that exceed client expectations. I am excited to continue expanding my skillset and taking on new challenges in the ever-evolving world of web development."</p>
      </div>
      <div className="media-link-section">
       <NavLink to="#"><BsFacebook className='incons'/></NavLink>
       <NavLink to="#"><BsLinkedin className='incons'/></NavLink>
       <NavLink to="#"><BsYoutube className='incons'/></NavLink>
       <NavLink to="#"><VscGithub className='incons'/></NavLink>
      </div>
      <div className="button-section">
        <button type='submit'><MdDownload className='download-icon'/> Download CV</button>
      </div>
      <div className="code">
        <span>" $ sudo pacman -S nodejs "</span>
      </div>
    </div>
    </div>
  )
}

export default Home