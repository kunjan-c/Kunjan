import React, { Fragment, useEffect, useContext } from "react";
import "./homepage.css";

import kunjanImg from "asset/img/Kc5.PNG";
import KLogo from "asset/img/k_logo.png";

import About from "Pages/about/about";
import SkillsSection from "Pages/skillsPage/skills";
import ExpPage from "Pages/ExpPage";
import Education from "components/Education/education";
import Projects from "components/projectDetails/projects";
import ContactMe from "Pages/conatctMe/contactMe";
import DownloadResumeBtn from "components/downloadResumeBTn/downloadResumeBtn";
import { clickedMenuOption } from "components/sidebar";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  const clickedMenuOptionn = useContext(clickedMenuOption);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    console.log(clickedMenuOptionn);
  }, [clickedMenuOptionn]);

  return (
    <Fragment>
      <div className="homepage-container homepage-section-container">
        {/* ===== Hero Section ===== */}
        <div className="homepage-intro" data-aos="fade-right">
          <h1 className="intro-greeting">Hi there! 👋</h1>
          <h2 className="intro-name">
            I'm <span className="name-highlight">Kunjan</span>
          </h2>
          <h3 className="role-title">Frontend Developer</h3>
          <div className="resume-btn-container">
            <DownloadResumeBtn />
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div className="homepage-main-img" data-aos="fade-left">
          <img
            className="homepage-k-Img"
            alt="Kunjan profile"
            src={kunjanImg}
          />
        </div>
      </div>

      {/* ===== Section Divider & Pages ===== */}
      <div className="section-divider" />
      <div data-aos="fade-up">
        <About />
      </div>

      <div className="section-divider" />
      <div data-aos="fade-up">
        <SkillsSection />
      </div>

      <div className="section-divider" />
      <div data-aos="fade-up">
        <ExpPage />
      </div>

      <div className="section-divider" />
      <div data-aos="fade-up">
        <Education />
      </div>

      <div className="section-divider" />
      <div data-aos="fade-up">
        <Projects />
      </div>

      <div className="section-divider" />
      <div data-aos="fade-up">
        <ContactMe />
      </div>
    </Fragment>
  );
}
