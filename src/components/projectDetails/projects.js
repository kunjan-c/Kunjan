import React from "react";
import "./projects.css";
import studentManagementAppSS from "asset/img/student_management.png";
import invoicetManagementAppSS from "asset/img/invoice_management.png";
import inventoryManagement from "asset/img/inventory_management.png";
import chatUI from "asset/img/chat_ui.png";
import ticketFRontUi from "asset/img/titcket_frontUI.png";
import movieDb from "asset/img/movieDb.png";
import solarSystem from "asset/img/solarSystemUI.png";

export default function Projects() {
  const myPortfolio = [
    // {
    //   title: "Invoice Management",
    //   projectImg: invoicetManagementAppSS,
    // },
    // {
    //   title: "Student Management App",
    //   projectImg: studentManagementAppSS,
    // },
    // {
    //   title: "Inventory  Management App",
    //   projectImg: inventoryManagement,
    // },
    // {
    //   title: "Chat UI",
    //   projectImg: chatUI,
    // },
    // {
    //   title: "Flight Ticket UI",
    //   projectImg: ticketFRontUi,
    // },
    // {
    //   title: "Movie Db App",
    //   projectImg: movieDb,
    // },
    // {
    //     title: "Solar System UI",
    //     projectImg: solarSystem,
    //   },
    {
      title: "Wealthier",
      projectShortDesc: solarSystem,
      projectSummaryText :"Carried out requirement analysis and Implemented the web implementation for a personal finance management smartphone app using RectJS for provided UI mockups."
    },
    {
      title: "BabyChefPizza Game",
      projectShortDesc: solarSystem,
      projectSummaryText :"Carried out requirement analysis and Implemented the web implementation for a children’s mobile game using HTML, CSS3, and vanilla JavaScript from provided UI mockups."
    },
    {
      title: "Amazon Ad Management CMS",
      projectShortDesc: solarSystem,
      projectSummaryText :"Ad management, and analytics application written with React as front-end technology,      "
    },
    {
      title: "KYC Verification SDK",
      projectShortDesc: solarSystem,
      projectSummaryText :"Created KYC Application from scratch which was written with React as front-end-technology"
    },
    {
      title: "Fixology Website",
      projectShortDesc: solarSystem,
      projectSummaryText :"Design and developed website for the company"
    },
  ];
  return (
    <>
      <div className="main-title">Projects</div>
      <div className="portfolio-container">
        {myPortfolio.map((projects) => {
          return (
            <div className="single-portfolio-card flip-card">
              <div className="flip-card-inner">
                {/* <img className="portfolio-img" src={projects.projectImg}></img> */}
                <div className="flip-card-Front ">
                  <div className="portfolio-title ">{projects.title}</div>
                </div>

                {/* <div className='portfolio-desc'>TEST</div> */}
                <div className="flip-card-back  ">
                <div className="flip-card-back-desc ">{projects.title}</div>
                  <div className="flip-card-back-desc">{projects.projectSummaryText}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
