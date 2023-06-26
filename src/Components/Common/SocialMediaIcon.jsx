import React, { Fragment } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const SocialMediaIcon = () => {
  return (
    <Fragment>
      <div className="social-media-icon">
      <a href="https://www.facebook.com/shariot.hossain.33" target="_blank">
          <BsFacebook className="icon icon1" />
        </a>
        <a href="https://www.linkedin.com/in/sariot-hossain-aa8488240/" target="_blank">
          <BsLinkedin className="icon icon2" />
        </a>
        <NavLink to="#">
          <AiFillTwitterCircle className="icon icon3" />
        </NavLink>
        <a href="https://github.com/sariothossain1011" target="_blank">
          <VscGithub className="icon icon4" />
        </a>
      </div>
    </Fragment>
  );
};

export default SocialMediaIcon;
