
import WebDesign from '../Assets/Image/webdesign.png'
import WebDevelopment from '../Assets/Image/webdevelopment.png'
import UixiDesign from '../Assets/Image/uixidesign.png'
import SeoMarketing from '../Assets/Image/seomarketing.png'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import { AiFillStar } from 'react-icons/ai';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../Assets/Css/ReviewSlider.css";

// import required modules
import { EffectCards } from "swiper";
const About = () => {
  return (
    <div className='about-body'>
    <div className="about-items">
      <div className="row">
        <h1>ABOUT <span>ME</span></h1>
        <div className="col-md-8 pt-5 about_left">
          <h2>I'm Sariot hossain, A Full Stack Web Developer!</h2>
          <p>I am able to solve complex logic or other tasks related to web development. I have a perfect understanding of how JavaScript, HTML, and CSS work. I have a lot of experience working with up-to-date technologies especially React JS. I have powerful knowledge HTML, CSS, Bootstrap, Tailwind CSS, JavaScript ES6, ReactJS, Redux, NextJS, NodeJS, NPM, YARN, ExpressJS, MongoDB, Mongoose, Aggregate, Postman, Data Structure and Algorithm</p>

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
        <div className='review-slider'>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row review-user">
            <div className="col-12">
              <div className="row ">
                <div className="col-md-2 user-img">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                </div>
                <div className="col-md-4 user-name">
                  <span> Rabbil Hasan </span><br />
                  <span>Senior Developer</span>
                </div>
                <div className="col-md-6 user-star ">
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 user-comment px-4">
                  "I am blown away by the quality of the web application developed by this team. They took the time to understand our vision and delivered a product that exceeded our expectations. Thank you for your hard work and dedication!"
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row review-user">
            <div className="col-12">
              <div className="row ">
                <div className="col-md-2 user-img">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                </div>
                <div className="col-md-4 user-name">
                  <span> Rana Arju</span><br />
                  <span>Junior Developer</span>
                </div>
                <div className="col-md-6 user-star">
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 user-comment px-4">
                  "Our new web application is simply outstanding! The development team was efficient, responsive, and went above and beyond to deliver a product that met all of our needs. Highly recommend their services!"
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row review-user">
            <div className="col-12">
              <div className="row ">
                <div className="col-md-2 user-img">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                </div>
                <div className="col-md-4 user-name">
                  <span> MD Fahad</span><br />
                  <span>MERM Developer</span>
                </div>
                <div className="col-md-6 user-star">
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 user-comment px-4">
                 "Our new web application is simply outstanding! The development team was efficient, responsive, and went above and beyond to deliver a product that met all of our needs. Highly recommend their services!"
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row review-user">
            <div className="col-12">
              <div className="row ">
                <div className="col-md-2 user-img">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                </div>
                <div className="col-md-4 user-name">
                  <span> Romman Hossain </span><br />
                  <span>Full Stack Developer</span>
                </div>
                <div className="col-md-6 user-star">
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                  <span><AiFillStar className='icon'/></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 user-comment px-4">
                "The team did an amazing job developing our web application. They were attentive, professional, and delivered a product that is both functional and visually stunning. I highly recommend their services!"
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About