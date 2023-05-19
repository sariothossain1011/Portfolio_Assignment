import { MdDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import SocialMediaIcon from "../Common/SocialMediaIcon";
import CV from "../../Assets/Image/github-sariothossain.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "sariot-hossain.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home-body">
      <div className="home-items">
        <div className="text-section">
          <h1 className="title home-title">
            <span className="span">Hi, I Am</span>{' '}
            <span style={{ color: '#4bffa5', fontWeight: 'bold' }}>
              <Typewriter
               
                words={["Sariot Hossain"," A Web Developer", " A Web Designer"]}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1500">
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
            <button type="submit" onClick={handleDownload}>
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
