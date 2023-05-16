import React, { Fragment } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SocialMediaIcon = () => {
  return (
    <Fragment>
      <div className="social-media-icon">
        <NavLink to="#">
          <BsFacebook className="icon icon1" />
        </NavLink>
        <NavLink to="#">
          <BsLinkedin className="icon icon2" />
        </NavLink>
        <NavLink to="#">
          <AiFillTwitterCircle className="icon icon3" />
        </NavLink>
        <NavLink to="#">
          <VscGithub className="icon icon4" />
        </NavLink>
      </div>
    </Fragment>
  );
};

export default SocialMediaIcon;
