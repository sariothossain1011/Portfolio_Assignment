import React, { useRef } from "react";

import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import SocialMediaIcon from "../Common/SocialMediaIcon";
import "./Contact.css";

import emailjs from "@emailjs/browser";
import { ErrorToast, SuccessToast } from "../../Helpers/Validation";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jshfpku",
        "template_1og0e4h",
        form.current,
        "IjKIoYzdEMYddk61J"
      )
      .then(
        (result) => {
          SuccessToast("E-mail Send Successfully");
        },
        (error) => {
          ErrorToast("E-mail Send Fail");
        }
      );
  };
  return (
    <div className="section-body">
      <div className="section-items">
        <h1
          className="title"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          Contact <span className="title-underline"> me</span>
        </h1>
        <div className="row pt-5">
          <div className="col-md-5 address-section">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              {" "}
              Address
            </h2>
            <div
              className="item"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <h5>
                <ImLocation className="icon" /> Bharua Khali, Cox's Bazar,
                Bangladesh
              </h5>
              <h5>
                <BsFillTelephoneOutboundFill className="icon" /> 0881881286293
              </h5>
              <h5>
                <MdEmail className="icon" /> sariothossain1011@gmail.com
              </h5>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <SocialMediaIcon className="icon" />
            </div>
          </div>
          <div className="col-md-7 email-section">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              Send Email
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form-div"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <input
                type="text"
                name="user-subject"
                placeholder="Subject"
                required={true}
              />
              <div className="name-email">
                <input
                  type="text"
                  name="user-name"
                  placeholder="Name"
                  required={true}
                />
                <input
                  type="email"
                  name="user-email"
                  placeholder="Email"
                  required={true}
                />
              </div>
              <textarea
                name="message"
                rows="10"
                placeholder="message"
                required={true}
              />
              <input type="submit" value="Send" className="button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
