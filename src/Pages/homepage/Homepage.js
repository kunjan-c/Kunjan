import React, { Fragment } from "react";
import kunjanImg from "asset/img/kunjan_img2 2.png";
import "./homepage.css";
import KLogo from "asset/img/k_logo.png";
import About from "Pages/about/about";
import Skills from "Pages/skillsPage/skills";
import SkillsMainPage from "Pages/skillsPage/skillsMainPage";

export default function Homepage() {
  return (
    <Fragment>
      <div className="">
        <div className="homepage-container homepage-section-container">
          <div className="homepage-intro">
            <div className="intro-text">Hi,</div>
            <div>
              <span className="intro-text">I'm </span>
              <span>
                <img src={KLogo} className="K-text-intro" alt="kLogo"></img>
                <span className="intro-text">unjan</span>
              </span>
            </div>
            <div>
              <span className="web-developer-text">Web Developer</span>
            </div>
          </div>
          <div className="homepage-main-img">
            <img
              className="homepage-k-Img"
              alt="homepage-k"
              src={kunjanImg}
            ></img>
          </div>
        </div>
        <About></About>
        <Skills></Skills>
        {/* <SkillsMainPage></SkillsMainPage> */}
      </div>
    </Fragment>
  );
}
