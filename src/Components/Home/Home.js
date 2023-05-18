import React from "react";
import { MdDownload } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialMediaIcon from "../Common/SocialMediaIcon";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Sariot Hossain ", "a Web Designer ", "a Developer "],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 80,
    cursor: true,
    // cursorStyle={{ position: "absolute", top: "0", left: "10px" }}
    // cursorBlinking:false,
  });
  return (
    <div className="home-body">
      <div className="home-items">
        <div className="text-section">
          <h1>
            I am{" "}
            <span style={{ fontWeight: "bold", color: "#4bffa5" }}>{text}</span>
            <Cursor
              blinkSpeed={500}
              cursorStyle="|"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9999,
              }}
            />
          </h1>
          <p data-aos="flip-left" data-aos-duration="1500">
            I am a skilled Full Stack Web Developer and Web Application
            specialist, proficient in both front-end and back-end development.
            With expertise in all stages of the development cycle, I excel at
            creating dynamic websites. I am proficient in CSS3, Bootstrap,
            Tailwind CSS, JavaScript ES6, Node.js, Express.js, and utilizing
            libraries such as React.js and Redux. I have experience working with
            MongoDB and implementing MongoDB Aggregation for efficient data
            management.
          </p>

          <div
            className="media-link-section"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <SocialMediaIcon />
          </div>
          <div
            className="button-section"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <button type="submit">
              <MdDownload className="download-icon" /> Download CV
            </button>
          </div>
          <div
            className="code"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
          >
            <span>" $ sudo pacman -S nodejs "</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
