import React from "react";
import "./ExpPage.css";
import cs from "asset/img/companyImg.png";
import soleCompany from "asset/img/solePropritorImg2.png";
import aimdLogo from "asset/img/companies/aimd-logo.svg";

const experiences = [
  {
    company: "Controlshift",
    logo: cs,
    duration: "Jun 2022 - May 2023",
    title: "Software Engineer",
  },
  {
    company: "PowerNox IT Solution",
    logo: soleCompany,
    duration: "May 2023 - Present",
    title: "Software Engineer",
  },
  {
    company: "AIMD (Freelance Project)",
    logo: aimdLogo,
    duration: "May 2023 - Present",
    title: "Frontend Developer",
  },
];

export default function ExpPage() {
  return (
    // <div id="expirience">
  
    <div className="exp-container" >
    <div className="main-title">Experience</div>
    <div id="experience" className="experience-wrapper">
      {/* <h2 className="experience-title">Experience</h2> */}

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <div>
                <h3>{exp.company}</h3>
                <p><strong>{exp.title}</strong></p>
                <span className="duration">{exp.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
