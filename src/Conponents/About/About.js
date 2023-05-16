import WebDesign from "../Assets/Image/webdesign.png";
import WebDevelopment from "../Assets/Image/webdevelopment.png";
import { AiFillStar } from "react-icons/ai";
import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./AboutSwiper.css";
// import required modules
import Star from "../Common/Star";
const howIDo = require("./WhatIDo.json");
const client = require("./Client.json");
console.log(client);
const About = () => {
  SwiperCore.use([Pagination]);
  return (
    <Fragment>
      <div className="section-body">
        <div className="section-items">
          <div className="about-body">
            <div className="row py-3">
              <h1 className="title">
                ABOUT <span className="title-underline">ME</span>
              </h1>
              <div className="col-md-8">
                <h2>I'm Sariot hossain, A Full Stack Web Developer!</h2>
                <p>
                  I am able to solve complex logic or other tasks related to web
                  development. I have a perfect understanding of how JavaScript,
                  HTML, and CSS work. I have a lot of experience working with
                  up-to-date technologies especially React JS. I have powerful
                  knowledge HTML, CSS, Bootstrap, Tailwind CSS, JavaScript ES6,
                  ReactJS, Redux, NextJS, NodeJS, NPM, YARN, ExpressJS, MongoDB,
                  Mongoose, Aggregate, Postman, Data Structure and Algorithm
                </p>
                <p>
                  My favorite in this programming sector is to fix any Errors.
                  Because in every error there is hope to learn something new. I
                  won't quit until I can fix the error. In this programming
                  life, I have tried to solve all kinds of problems and have
                  succeeded. My policy is to stick with it until the problem is
                  solved.
                </p>
              </div>
              <div className="col-md-4 about-info">
                <h6>Name : Sariot hossain (sumon)</h6>
                <h6>Email : sariothossain1011@gmail.com</h6>
                <h6>Age : {new Date().getFullYear() - 2003}</h6>
                <h6>Nationality : Bangladesh</h6>
                <h6>Languages : English, Bangla </h6>
                <h6>From : Cox's Bazar, Bangladesh </h6>
              </div>
            </div>
            <div className="row py-3">
              <h1 className="title">
                What I <span className="title-underline">Do</span>?
              </h1>
              <div className="col-md-12 py-3">
                <div className="box">
                  <div className="row">
                    {howIDo ? (
                      howIDo.map((item, index) => {
                        return (
                          <div className="col-md-6 py-4" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <img src={WebDesign} alt="" />
                              </div>
                              <div className="col-md-10">
                                <h3>{item.subject}</h3>
                                <p>{item.info}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <h1>
                  Client <span>review</span>
                </h1>
              </div>
              <div className="col-md-12 ">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  pagination={{ 
                    clickable: true,
                  }}
                  
                  modules={[Pagination]}
                  className="mySwiper "
                >
                  {
                    client?client.map((item,index)=>{
                      return(
                        <SwiperSlide >
                    <div className="client-section">
                    <div className="image-name">
                      <div className="col-md-2 client-image">
                        <img src={item.image} className="" />
                      </div>
                      <div className="col-md-10 client-name">
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 pt-2 client-text">
                      <p>{item.comment}</p>
                      </div>
                      <div className="col-md-12">
                        <Star/>
                      </div>
                    </div>
                    </div>
                  </SwiperSlide>
                      )
                    }):(<div></div>)
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
