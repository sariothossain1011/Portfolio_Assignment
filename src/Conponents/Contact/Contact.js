import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import { BsFacebook,BsLinkedin,BsYoutube ,BsFillTelephoneOutboundFill} from "react-icons/bs";
import { VscGithub} from "react-icons/vsc";
import {MdEmail} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import { ErrorTost, IsEmty, SuccessTost } from '../../Helpers/Validation';
import { ContactApi } from '../../ApiServices/ApiService';
// import FullScrenLoder from '../Common/FullScreenLoder';
const Contact = () => {
  let {subject ,name ,email,comment} =useRef();

  const SaveData=(e)=>{
    e.preventDefault()
    let Subject = subject.value ;
    let Name = name.value ;
    let Email = email.value ;
    let Comment = comment.value ;

    if(IsEmty(Subject)){
      ErrorTost('Plasce subject required')
  }else if(IsEmty(Name)){
      ErrorTost('Plasce name required')
  }else if(IsEmty(Email)){
      ErrorTost('Plasce email required')
  }else if(IsEmty(Comment)){
      ErrorTost('Plasce text required')
  }
  else{
    // Loder.classList.remove("d-none")
    ContactApi(Subject,Name,Email,Comment).then((Result)=>{
      // alert(Result)
      // Loder.classList.add("d-none")
        if(Result===true){
          SuccessTost("Comment send success");
          subject.value='' ;
          name.value='';
          email.value='';
          comment.value='';
        }
      }).catch((error)=>{
        ErrorTost("Comment send fail")
        console.log(error)
      })
  }
    
  }
  return (
    <div className='contact-body'>
    <div className="row contact-items">
      <h1><span>Contact</span></h1>
      <div className="col-md-4 contact-info">
        <h2><span>address</span></h2>
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
      <div className="col-md-8 contact-form">
        <h2><span>send as a node</span></h2>
        <form action="POST" className='formInput pt-4'>
        <input type="text" ref={(input)=>subject=input} placeholder='Subject' className='single-input w-100 p-2 '/>
          <div className="doubble-input">
          <div><input ref={(input)=>name=input} type="text" placeholder='Name' className=' p-2'/></div>
          <div><input ref={(input)=>email=input} type="email" placeholder='Email' className=' p-2'/></div>
           
          </div>
          <div className="comment-section">
            <h5>Lorem ipsum dolor sit amet.</h5>
            <textarea ref={(input)=>comment=input} name="" id="" className='w-100' rows="9"></textarea>
          </div>
          <button onClick={SaveData} type='submit' className='sumitBtn'>SEND</button>
          <ToastContainer position="top-center" />
        </form>

      </div>
    </div>
      {/* <div className='d-none' ref={(div)=>Loder=div} >
            <FullScrenLoder/>
      </div> */}
    </div>
  )
}

export default Contact ;