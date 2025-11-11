import React from "react";
import "./ExpPage.css";
import cs from "asset/img/companyImg.png";
import soleCompany from "asset/img/solePropritorImg2.png";
import aimdLogo from "asset/img/companies/aimd-logo.svg";
import powerNoxLogo from "asset/img/companies/powernox_black_logo.png";
import controlShiftLogo from "asset/img/companies/controlShiftLogo.svg";
import omdLogo from "asset/img/companies/omd_logo.png"
const experiences = [

  {
    company: "AIMD Technologies",
    logo: aimdLogo,
    duration: "Oct 2024 - Apr 2025",
    title: "Frontend Developer",
  },

  {
    company: "PowerNox IT Solutions",
    logo: powerNoxLogo,
    duration: "May 2023 - Sep 2024",
    title: "Software Engineer",
  },
  {
    company: "Controlshift Pvt. Ltd.",
    logo: controlShiftLogo,
    duration: "Jun 2022 - May 2023",
    title: "Software Engineer",
  },
  {
    company: "OMD Solutions",
    logo: omdLogo,
    duration: "Oct 2018 - Dec 2019",
    title: "Senior Coordinator",
  },
];

export default function ExpPage() {
  return (
    <div className="exp-container">
      <div className="section-title">Experience</div>
      <div id="experience" className="experience-wrapper">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" data-aos="fade-left" key={index}>
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
