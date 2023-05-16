import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Assets/Image/sariot-hossain.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { HiOutlineDocument } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import SocialMediaIcon from "./SocialMediaIcon";

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label for="check">
        <FaBars id="btn" />
        <RxCross2 id="cancel" />
      </label>
      <div className="nav-section sidebar">
        <nav>
          <div className="img-section">
            <img src={Profile} alt="" />
          </div>

          <div className="navbar-intro">
            <ul>
              <li>
                <NavLink to="/">
                  <AiOutlineHome className="icon" /> HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <BiUser className="icon" /> ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume">
                  <HiOutlineDocument className="icon" /> RESUME
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolios">
                  <CgWebsite className="icon" /> PORTFOLIOS
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">
                  <TfiWrite className="icon" /> BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <AiOutlineMail className="icon" /> CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-social-media-div">
              <SocialMediaIcon />
            </div>
          <div className="nav-footer">
            <p>&copy; {new Date().getFullYear()} sariot</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
