import React from 'react'
import { BsFacebook,BsLinkedin,BsYoutube ,BsFillTelephoneOutboundFill} from "react-icons/bs";
import { VscGithub} from "react-icons/vsc";
import {MdEmail} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='contact-body'>
    <div className="row">
      <div className="headerhome"><h1>Contact</h1></div>
      <div className="col-md-4 ">
        <h2>Address</h2>
        <div className="pt-4 address">
        <p>Bharua Khali, Cox's Bazar, Bangladesh</p>
        <div className="icons">
        <h5><BsFillTelephoneOutboundFill /> +0881881286293</h5>
        <h5><MdEmail /> sariothossain1011@gmail.com</h5>
        </div>
        <div className="socialIcons">
        <NavLink to="#"><BsFacebook className='icon'/></NavLink>
       <NavLink to="#"><BsLinkedin className='icon'/></NavLink>
       <NavLink to="#"><BsYoutube className='icon'/></NavLink>
       <NavLink to="#"><VscGithub className='icon'/></NavLink>
        </div>
        </div>
      </div>
      <div className="col-md-8">
        <h2>send as a node</h2>
        <form action="POST" className='formInput pt-4'>
        <input type="text" placeholder='Subject' className='single-input w-100 p-2 '/>
          <div className="doubble-input">
          <input type="text" placeholder='Name' className=' p-2'/>
           <input type="email" placeholder='Email' className=' p-2'/>
          </div>
          <div className="comment-section">
            <h5>Lorem ipsum dolor sit amet.</h5>
            <textarea name="" id="" className='w-100' rows="9"></textarea>
          </div>
          <button type='submit' className='sumitBtn'>SEND</button>
        </form>

      </div>
    </div>
     </div>
  )
}

export default Contact