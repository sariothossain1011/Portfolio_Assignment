import { FaGraduationCap } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CertificateSlider.css";
import { EffectCoverflow, Pagination } from "swiper";
const skill = require("./Skill.json");
const education = require("./Education.json");
const work = require("./Work.json");
const certificate = require("./Certificate.json");

const Resume = () => {
  return (
    <div className="section-body">
      <div className="section-items">
        <div className="row">
          <div className="triangle-style py-5">
            <h2
              className="py-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              RESU<span className="title-underline">ME</span>
            </h2>
          </div>
          <div className="col-md-12 education ">
            <h2
              className="py-5 fs-1"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <FaGraduationCap className="education-experience-icons " />{" "}
              Educational Qualification
            </h2>
            {education ? (
              education.map((item, index) => {
                return (
                  <div
                    className="row resume-radius"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500"
                  >
                    <div className="col-md-4 top-decrease">
                      <h2 cb>{item.date}</h2>
                    </div>
                    <div className="col-md-8 top-decrease ">
                      <h2>{item.subject}</h2>
                      <h4>{item.board}</h4>
                      <h5>Result : {item.result}</h5>
                      <p>{item.info}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-md-12">
            <h2
              className="py-5 fs-1"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <IoCodeWorkingSharp className="education-experience-icons" />{" "}
              Working Experience
            </h2>
            {work ? (
              work.map((item, index) => {
                return (
                  <div
                    className="row resume-radius"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500"
                  >
                    <div className="col-md-4 top-decrease">
                      <h2>{item.date}</h2>
                    </div>
                    <div className="col-md-8 top-decrease">
                      <h2>{item.subject}</h2>
                      <h4>{item.company}</h4>
                      <p>{item.info}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-md-12 skill-section py-4">
            <div className="triangle-style py-5">
              <h2
                className="py-5"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                SKILL <span className="title-underline">POINT</span>
              </h2>
            </div>
            <div className="circular-items">
              {skill ? (
                skill.map((item, index) => {
                  return (
                    <div
                      className="item"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="1500"
                    >
                      <CircularProgressbar
                        value={item.value1}
                        text={item.value}
                        className="icon"
                        strokeWidth={9}
                        styles={buildStyles({
                          pathColor: "#4bffa5", // Replace with your desired color
                          textColor: "#fff", // Replace with your desired color
                          trailColor: "#CCCCCC", // Replace with your desired color
                          // pathTransitionDuration: 7, // Replace with your desired duration in seconds
                          // pathWidth: 50
                        })}
                      />
                      <h4>{item.name}</h4>
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="col-md-12 cerfificate-section py-4">
            <div className="triangle-style py-5">
              <h2
                className="py-5"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                MY CERTIFI<span className="title-underline">CATE</span>
              </h2>
            </div>
            <div
              className="pt-2"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              "After overcoming many obstacles and dedicating countless hours of
              hard work, I am ecstatic to announce that I have earned my
              certificate. It is a true testament to my determination and
              passion for passion for Web Development."
            </div>
            <div className="cerfificate-item pt-3">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {certificate ? (
                  certificate.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <a href={`${item.url}`} target="_blank">
                          <img src={`${item.url}`} />
                        </a>
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
  );
};

export default Resume;
