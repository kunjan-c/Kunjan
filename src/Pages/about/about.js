import React from "react";
import "./about.css";
import womenImgForAboutSection from "asset/img/woman-g5e97a2e26_1280.png"
export default function About() {
  return (
    <div className="homepage-section-container " id="about">
      <div className="main-title">About Myself</div>
    
      <div className="summary-text-container">
        <div className="summary">
          Passionate frontend engineer with expertise in ReactJS, HTML, CSS, and
          JavaScript. 3 years of experience delivering exceptional results by
          collaborating with clients and leading development teams. Well-rounded
          education in Commerce. Constantly updating skills through online
          courses. Diverse portfolio showcasing attention to detail and creative
          problem-solving. Proficient in creating user-friendly applications
          with intuitive UI components and efficient business logic. Strong
          communication and collaboration skills. Let's connect to discuss how I
          can contribute to your project's success
          {/* <ul>
            <li>
              Passionate frontend engineer with expertise in ReactJS, HTML, CSS,
              and JavaScript.
            </li>
            <li>
              3 years of experience delivering exceptional results through
              collaboration with clients and leading development teams.
            </li>
            <li>
              Well-rounded education in Commerce, providing a unique perspective
              on user behavior and business requirements.
            </li>
            <li>
              Constantly updating skills through online courses to stay at the
              cutting edge of technology.
            </li>
            <li>
              Creative problem-solver, crafting user-friendly applications with
              intuitive UI components and efficient business logic.
            </li>
            <li>
              Strong communication and collaboration skills to foster effective
              teamwork.
            </li>
            <li>
              Diverse portfolio showcasing attention to detail and innovative
              solutions.
            </li>
          </ul> */}
        </div>
  
        <img src={womenImgForAboutSection} className="women-img"></img>
 
      </div>
    </div>
  );
}
