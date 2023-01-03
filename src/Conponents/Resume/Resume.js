import React from 'react'

import { FcGraduationCap } from 'react-icons/fc';
import { IoCodeWorkingSharp } from 'react-icons/io5';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Resume = () => {
  return (
    <div className='resume-body'>
      <div className="resume-items">
        <div className="row">
          <h1>RESUME</h1>
          <div className="col-md-12 education">
            <h3><FcGraduationCap className='education-icon'/> Educational Qualifications</h3>
            <div className="row">
              <div className="col-md-4">
                <h2>2019 - Present</h2>
              </div>
              <div className="col-md-8">
                <h2>Diploma engineering (CSE)</h2>
                <h4>Bangladesh Technical Education Board (BTEB)</h4>
                <h5>Result : pending</h5>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quo distinctio corrupti incidunt a quam repellendus laboriosam quia dolorum illo laborum inventore, laudantium cupiditate eum ea ullam? Similique, quibusdam nam! </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h2>2018 - 2019</h2>
              </div>
              <div className="col-md-8">
                <h2>Secondary School Certificate (SSC)</h2>
                <h4>Board of Intermediate & Secondary Education, Chattogram</h4>
                <h5>Result : 4.28</h5>
                <p>I completed Secondary School Certificate from Mohammad Ilias Mia Chy: High School. I was a student of Science background. I completed SSC in 2019.</p>
              </div>
            </div>
            
          </div>
          <div className="col-md-12 experince">
          <h3><IoCodeWorkingSharp className='experince-icon'/> Working Experience</h3>
            <div className="row">
              <div className="col-md-4">
                <h2>20121 - Present</h2>
              </div>
              <div className="col-md-8">
                <h2>Full stack Web Developer (MERN)</h2>
                <h4>Owner Company</h4>
                <p>Working as Full stack Web Developer As MERN. My complete focus is on MERN stack development. MEAN is a free and open-source JavaScript software stack for building dynamic websites and web applications. Creating and submitting new projects daily as per proper guidelines and information.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h2>2019 - 21</h2>
              </div>
              <div className="col-md-8">
                <h2>UI/UX Designer</h2>
                <h4>Owner Company</h4>
                <p>I have experience creating web templates from Adobe XD and Figma. But currently I mostly work with Figma. But no problem I have ample experience in both. I have done everything from figma to html.</p>
              </div>
            </div>
            
          </div>
          <div className="col-md-12 skill-section">
          <h1>SKILL <span>POINT</span></h1>
            <div className="circular-items">

             <div className="item">
              <CircularProgressbar value={90} text={`90%`} className='icon'/>
              <h4>HTML5</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={80} text={`80%`} className='icon'/>
              <h4>CSS</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={80} text={`80%`} className='icon'/>
              <h4>BOOTSTRAP</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={70} text={`70%`} className='icon'/>
              <h4>JAVASCRIPT</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={80} text={`80%`} className='icon'/>
              <h4>REACT JS</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={70} text={`60%`} className='icon'/>
              <h4>NODE JS</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={85} text={`85%`} className='icon'/>
              <h4>EXPRESS JS</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={75} text={`75%`} className='icon'/>
              <h4>MONGODB</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={70} text={`70%`} className='icon'/>
              <h4>GIT</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={60} text={`60%`} className='icon'/>
              <h4>TAILWINCSS</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={85} text={`85%`} className='icon'/>
              <h4>JWT</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={90} text={`90%`} className='icon'/>
              <h4>POSTMAN</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={30} text={`30%`} className='icon'/>
              <h4>PHYTHON</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={30} text={`30%`} className='icon'/>
              <h4>JAVA</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={30} text={`30%`} className='icon'/>
              <h4>C#</h4>
             </div>
             <div className="item">
              <CircularProgressbar value={60} text={`60%`} className='icon'/>
              <h4>REDUX</h4>
             </div>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Resume