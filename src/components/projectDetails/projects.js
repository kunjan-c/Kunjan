import React from "react";
import "./projects.css";

const myPortfolio = [
  {
    title: "Health Measurement Web App",
    client: "AIMD Technologies Inc. (US-based)",
     department: "Software Engineering",
    link: "https://my.ai-md.com/",
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
    summary: "Built a KYC web application from scratch using ReactJS, enabling seamless identity verification with a clean, responsive UI",
  },
  {
    title: "Ads Management Web Application",
    client: "Adyogi",
    link: "https://youtu.be/DtQ27jcxPc4",
    department: "Software Engineering",
    summary: "Developed a dynamic Facebook-style ad management and analytics dashboard using ReactJS, featuring real-time campaign metrics, ad performance tracking, and a user-friendly interface.",
  },

  {
    title: "Corporate Website",
    client: "Fixology",
     department: "Software Engineering",
    link: "https://fixologydxb.com/",
    summary: "Designed and maintained a responsive corporate website for a Dubai-based startup, ensuring modern UI, cross-browser compatibility, and performance optimization.",
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
      <h2 className="section-title">Crafted With Code</h2>
      <div className="portfolio-container">
        {myPortfolio.map((project, idx) => (
          <div className="project-card" data-aos="zoom-in" key={idx}>
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-client"><strong>Client:</strong> {project.client}</p>
              <p className="project-department"><strong>Department:</strong> {project.department}</p>
              <p className="project-summary">{project.summary}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}










