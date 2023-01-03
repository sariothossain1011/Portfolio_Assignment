import React from 'react'
import WebDesign from '../Assets/Image/webdesign.png'
import WebDevelopment from '../Assets/Image/webdevelopment.png'
import UixiDesign from '../Assets/Image/uixidesign.png'
import SeoMarketing from '../Assets/Image/seomarketing.png'
import Review1 from '../Assets/Image/client1.jpg'
import Review2 from '../Assets/Image/client2.jpg'
import Review3 from '../Assets/Image/client3.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { AiFillStar } from 'react-icons/ai';
const About = () => {
  return (
    <div className='about-body'>
    <div className="about-items">
      <div className="row">
        <h1>ABOUT <span>ME</span></h1>
        <div className="col-md-8 pt-5 about_left">
          <h2>I'm Sariot hossain, A Full Stack Web Developer!</h2>
          <p>I am able to solve complex logic or other tasks related to web development. I have a perfect understanding of how JavaScript, HTML, and CSS work. I have a lot of experience working with up-to-date technologies especially React JS. I have powerful knowledge HTML, CSS, Bootstrap, Tailwind CSS, JavaScript ES6, ReactJS, Redux, NodeJS, NPM, ExpressJS, MongoDB, PostMan, Figma.</p>

          <p>My favorite in this programming sector is to fix any Errors. Because in every error there is hope to learn something new. I won't quit until I can fix the error. In this programming life, I have tried to solve all kinds of problems and have succeeded. My policy is to stick with it until the problem is solved.</p>
        </div>
        <div className="col-md-4 pt-5 parsonal-info">
          <h6>Name : Sariot hossain (sumon)</h6>
          <h6>Email : sariothossain1011@gmail.com</h6>
          <h6>Age : {(new Date().getFullYear() )- 2003}</h6>
          <h6>Nationality : Bangladesh</h6>
          <h6>Languages  : English, Bangla </h6>
          <h6>From  : Cox's Bazar, Bangladesh </h6>
        </div>
      </div>
      <div className="row">
        <h1>What I <span>Do</span> ?</h1>
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
                <p>I use design programs to create visual elements. Website designers usually have expertise in UI, or user interface, which means I strategically design a site that's intuitive and easy for visitors to navigate.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={WebDevelopment} alt="" />
                </div>
                <div className="col-md-10">
                <p>Web Development</p>
                <p>Web developers create and maintain websites. I am also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={UixiDesign} alt="" />
                </div>
                <div className="col-md-10">
                <p>Uixi Design</p>
                <p>LA UI, UX, and front-end web developer is responsible for applying interactive and visual design principles on websites and web applications for a positive and cohesive user experience. These developers use HTML, CSS, and other design tools to achieve responsive designs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">
                <img src={SeoMarketing} alt="" />
                </div>
                <div className="col-md-10">
                <p>SEO Marketing</p>
                <p>Search engine optimization is the complete form of SEO. I have three years of experience in Search Engine Optimization. I am well versed in OnPage SEO, Off Page SEO and Email Marketing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>      
       </div>
      </div>
      <div className="row">
        <div><h1>Client <span>review</span></h1></div>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row ">
            <div className="col-md-10 main">
            <div className="col-12 ">
              <div className="row pt-3">
                <div className="col-md-4 clientImg">
                <img src={Review1} alt="" />
                </div>
                <div className="col-md-8 clientInfo">
                <h2>Fawzia Nasrin</h2>
                <span>Web Developer</span>
                </div>
              </div>
              <div className="col-10 clientComment">
                <span>It has been a pleasure working with Sariot. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone.</span>
                <div className="icons">
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
              </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row ">
            <div className="col-md-10 main">
            <div className="col-12 ">
              <div className="row pt-3">
                <div className="col-md-4 clientImg">
                <img src={Review2} alt="" />
                </div>
                <div className="col-md-8 clientInfo">
                <h2>David Sandford</h2>
                <span>VC, Eurosport Corporate</span>
                </div>
              </div>
              <div className="col-10 clientComment">
                <span>We utilized Warren’s Project Management skills to oversee the smooth transition of our merger with Yahoo Sport. Our consumers gave us such positive feedback, we later returned to Warren, this time to design a new landing page for our corporate website. The results yet again were outstanding.</span>
                <div className="icons">
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
              </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row ">
            <div className="col-md-10 main">
            <div className="col-12 ">
              <div className="row pt-3">
                <div className="col-md-4 clientImg">
                <img src={Review3} alt="" />
                </div>
                <div className="col-md-8 clientInfo">
                <h2>Samuel Darby</h2>
                <span>Geo-Systems USA</span>
                </div>
              </div>
              <div className="col-10 clientComment">
                <span>It has been a pleasure working with Sariot. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone.</span>
                <div className="icons">
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
              </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
    </div>
  )
}

export default About