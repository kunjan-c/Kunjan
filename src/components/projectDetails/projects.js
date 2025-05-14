import React from "react";
import "./projects.css";

const myPortfolio = [
  {
    title: "Health Measurement Web App",
    client: "AIMD Technologies Inc. (US-based)",
    department: "Software Engineering",
    summary: "Developed a responsive front-end for an AI-powered health measurement application.",
  },
  {
    title: "Finance Management App",
    client: "PowerNox IT Solutions",
    department: "Software Engineering",
    summary: "Carried out requirement analysis and implemented the web version of a personal finance management app using ReactJS for provided UI mockups.",
  },
  {
    title: "KYC Web Application",
    client: "ControlShift Private Limited",
    department: "Software Engineering",
    summary: "Created a KYC application from scratch using ReactJS for front-end technology.",
  },
  {
    title: "Ads Management Web Application",
    client: "ControlShift Private Limited",
    department: "Software Engineering",
    summary: "Developed an ad management and analytics application with ReactJS as the front-end technology.",
  },

  {
    title: "Corporate Website",
    client: "Dubai Based Client",
    department: "Software Engineering",
    summary: "Developed and maintained a corporate website for a Dubai-based start-up.",
  },
  {
    title: "Employee Management System",
    client: "PowerNox IT Solutions",
    department: "Software Engineering",
    summary: "Developed an employee management portal using HTML, CSS, SCSS, and JavaScript as per the given design.",
  },

  {
    title: "Kids Game",
    client: "PowerNox IT Solutions",
    department: "Software Engineering",
    summary: "Developed a children's mobile game using HTML, CSS3, and vanilla JavaScript from provided UI mockups.",
  },
  // {
  //   title: "Dhruv-Track (Fleet Vehicle Tracking)",
  //   client: "OMD Solutions",
  //   department: "Senior Coordinator",
  //   summary: "Handled GPS device configuration, device-vehicle mapping, client coordination for hardware installation, and trained clients on dashboard usage. Supported sales pitches and technical demonstrations.",
  // },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="portfolio-container">
        {myPortfolio.map((project, idx) => {
          return (
            <div className="project-card" data-aos="zoom-in"  key={idx}>
              <div className="card-content" >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-client"><strong>Client:</strong> {project.client}</p>
                <p className="project-department"><strong>Department:</strong> {project.department}</p>
                <p className="project-summary">{project.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
