import React from 'react'
import WebDesign from '../Assets/Image/webdesign.png'
const About = () => {
  return (
    <div className='about-body'>
    <div className="about-info p-5">
      <div className="row">
        <h1>ABOUT ME</h1>
        <div className="col-md-8 pt-5 about_left">
          <h2>I'm Sariot hossain, A Full Stack Web Developer!</h2>
          <p>I am able to solve complex logic or other tasks related to web development. I have a perfect understanding of how JavaScript, HTML, and CSS work. I have a lot of experience working with up-to-date technologies especially React JS. I have powerful knowledge HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript ES6, TypeScript, ReactJS, Redux, NodeJS, NPM, ExpressJS, MongoDB, PostMan, Webpack, Firebase, Figma, XD, PhotoShop, Illustrator, Linux OS.</p>

          <p>My favorite in this programming sector is to fix any Errors. Because in every error there is hope to learn something new. I won't quit until I can fix the error. In this programming life, I have tried to solve all kinds of problems and have succeeded. My policy is to stick with it until the problem is solved.</p>
        </div>
        <div className="col-md-4 pt-5 parsonal-info">
          <h6>Name : Sariot hossain sumon</h6>
          <h6>Email : sariothossain1011@gmail.com</h6>
          <h6>Age : {(new Date().getFullYear() )- 2003}</h6>
          <h6>Nationality : Bangladesh</h6>
          <h6>Languages  : English, Bangla </h6>
          <h6>From  : Cox's Bazar, Bangladesh </h6>
        </div>
      </div>
      <div className="row">
        <h1>What I Do?</h1>
       <div className="col-md-12">
        <div className="box">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={WebDesign} alt="" />
                </div>
                <div className="col-md-10">
                <p>Web Design</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi expedita hic maiores numquam laboriosam accusamus nulla in possimus. Expedita iure quod blanditiis, nihil esse</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={WebDesign} alt="" />
                </div>
                <div className="col-md-10">
                <p>Web Design</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi expedita hic maiores numquam laboriosam accusamus nulla in possimus. Expedita iure quod blanditiis, nihil esse</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={WebDesign} alt="" />
                </div>
                <div className="col-md-10">
                <p>Web Design</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi expedita hic maiores numquam laboriosam accusamus nulla in possimus. Expedita iure quod blanditiis, nihil esse</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={WebDesign} alt="" />
                </div>
                <div className="col-md-10">
                <p>Web Design</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi expedita hic maiores numquam laboriosam accusamus nulla in possimus. Expedita iure quod blanditiis, nihil esse</p>
                </div>
              </div>
            </div>
          
            
          </div>
        </div>      
       </div>
      </div>
    </div>
    </div>
  )
}

export default About