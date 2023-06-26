import React, { Fragment } from "react";
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

const About = () => {
  SwiperCore.use([Pagination]);
  return (
    <Fragment>
      <div className="section-body">
        <div className="section-items">
          <div className="about-body">
            <div className="row py-3">
              <div className="triangle-style py-5 ">
                <h2
                  className="py-5 "
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  ABOUT <span className="title-underline">ME</span>
                </h2>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                <h2>I'm Sariot hossain, A Full Stack Web Developer!</h2>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  I have a strong ability to solve complex logic and tackle
                  various web development tasks. I possess a thorough
                  understanding of JavaScript, HTML, and CSS, and I am highly
                  experienced in utilizing modern technologies, particularly
                  React JS. My knowledge extends to HTML, CSS, Bootstrap,
                  Tailwind CSS, JavaScript ES6, ReactJS, Redux, NextJS, NodeJS,
                  NPM, YARN, ExpressJS, MongoDB, Mongoose, Aggregate, Postman,
                  Data Structures, and Algorithms.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  Fixing errors is my favorite aspect of programming because it
                  provides an opportunity to learn something new. I am
                  relentless in resolving errors and won't give up until they
                  are fixed. Throughout my programming journey, I have
                  encountered and successfully solved a wide range of problems.
                  My approach is to persist until a solution is found.
                </p>
              </div>
              <div
                className="col-md-4 about-info"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                <h6>Name : Sariot hossain (sumon)</h6>
                <h6>Email : sariothossain1011@gmail.com</h6>
                <h6>Age : {new Date().getFullYear() - 2003}</h6>
                <h6>Nationality : Bangladesh</h6>
                <h6>Languages : English, Bangla </h6>
                <h6>From : Cox's Bazar, Bangladesh </h6>
              </div>
            </div>
            <div className="row py-3">
            <div className="triangle-style py-5 ">
              <h2 className="py-5">
                What I <span className="title-underline">Do</span>?
              </h2>
              </div>
              <div className="col-md-12 py-3">
                <div className="box">
                  <div className="row">
                    {howIDo ? (
                      howIDo.map((item, index) => {
                        return (
                          <div
                            className="col-md-6 py-4"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1500"
                          >
                            <div className="row">
                              <div className="col-md-2">
                                <img src={item.image} alt="" />
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
            <div
              className="row"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <div className="triangle-style py-5 ">

                <h2 className="py-5">
                  Client <span>review</span>
                </h2>
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
                  {client ? (
                    client.map((item, index) => {
                      return (
                        <SwiperSlide>
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
                                <Star />
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
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
