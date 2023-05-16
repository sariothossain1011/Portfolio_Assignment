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
          <p>
            "I am a web developer with three years of experience. I have
            expertise in HTML, CSS, Bootstrap, Tailwin css, JavaScript ES6,
            React.js, Redux, Next.js ,Node.js, express.js, MongoDB, Mongoose ,
            Agggregate, Data Structure, Algorithm and am passionate about
            creating beautiful and functional websites that exceed client
            expectations. I am excited to continue expanding my skillset and
            taking on new challenges in the ever-evolving world of web
            development."
          </p>
        </div>
        <div className="media-link-section">
          <SocialMediaIcon />
        </div>
        <div className="button-section">
          <button type="submit">
            <MdDownload className="download-icon" /> Download CV
          </button>
        </div>
        <div className="code">
          <span>" $ sudo pacman -S nodejs "</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
