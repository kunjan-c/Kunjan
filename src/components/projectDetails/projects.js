import React from "react";
import "./projects.css";


export default function Projects() {
  const myPortfolio = [
    {
      title: "Jamben Technical Services",
      liveLInk: "https://jambentechnicalservices.com/",
      projectSummaryText: "developed corporate website for dubai based client",
    },
    {
      title: "Wealthier",
      projectSummaryText:
        "Carried out requirement analysis and Implemented the web implementation for a personal finance management smartphone app using RectJS for provided UI mockups.",
    },
    {
      title: "BabyChefPizza Game",
      projectSummaryText:
        "Carried out requirement analysis and Implemented the web implementation for a children’s mobile game using HTML, CSS3, and vanilla JavaScript from provided UI mockups.",
    },
    {
      title: "Amazon Ad Management CMS",
      projectSummaryText:
        "Ad management, and analytics application written with React as front-end technology,      ",
    },
    {
      title: "KYC Verification SDK",
      projectSummaryText:
        "Created KYC Application from scratch which was written with React as front-end-technology",
    },
    {
      title: "Fixology Website",
      liveLInk: "https://fixologydxb.com/",
      projectSummaryText: "Design and developed website for the company",
    },
  ];
  return (
    <>
      <div className="main-title" id="mywork">
        Projects
      </div>
      <div className="portfolio-container">
        {myPortfolio.map((projects) => {
          return (
            <div className="single-portfolio-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-Front ">
                  <div className="portfolio-title ">{projects.title}</div>
                  <div className="project-live-link">
                    {projects.liveLInk}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
