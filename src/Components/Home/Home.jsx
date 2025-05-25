import { MdDownload } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import SocialMediaIcon from "../Common/SocialMediaIcon";
import CV from "../../Assets/Image/sariot-hossain-resume.pdf";
import About from "../About/About";
import Resume from "../Resume/Resume";
import PortfoliosPage from "../../Pages/PortfoliosPage";
import BlogPage from "../../Pages/BlogPage";
import ContactPage from "../../Pages/ContactPage";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "sariot-hossain-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
 <>
    <div className="home-body">
      <div className="home-items">
        <div className="text-section">
          <h1 className="title home-title">
            <span className="span">Hi, I am</span>{" "}
            <span style={{ color: "#4bffa5", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Sariot Hossain",
                  " a Junior Web Developer",
                  " a Full Stack Web Designer",
                ]}
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
            I am a proficient Junior Web Developer and Web Application
            Specialist with hands-on experience in both front-end and back-end
            technologies. I bring expertise across the entire development
            lifecycle, from planning and design to deployment and maintenance. I
            specialize in building responsive, high-performance web applications
            using modern tools and frameworks. My skill set includes CSS3,
            Bootstrap, Tailwind CSS, JavaScript, Node.js, and Express.js,
            alongside advanced front-end libraries such as React.js, Next.js,
            and Redux. On the back end, I have solid experience working with
            MongoDB and PostgreSQL, including the use of MongoDB Aggregation for
            optimized data processing and management. I am passionate about
            building clean, efficient code and delivering seamless user
            experiences across platforms.
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
            onClick={handleDownload}
          >
            <button type="submit">
              <MdDownload className="download-icon" /> Download CV
            </button>
          </div>
          {/* <div
            className="code"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
          >
            <span>" $ sudo pacman -S nodejs "</span>
          </div> */}
        </div>
      </div>
    </div>

 </>
  );
};

export default Home;
