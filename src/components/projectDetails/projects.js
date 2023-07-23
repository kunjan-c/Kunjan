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
    },
    {
      title: "BabyChefPizza Game",
      projectShortDesc: solarSystem,
    },
    {
      title: "Amazon Ad Management CMS",
      projectShortDesc: solarSystem,
    },
    {
      title: "KYC Verification SDK",
      projectShortDesc: solarSystem,
    },
    {
      title: "Fixology",
      projectShortDesc: solarSystem,
    },
    
  ];
  return (
    <>
     <div className="main-title">Projects</div>
    <div className="portfolio-container">
        
      {myPortfolio.map((projects) => {
        return (
          <div className="single-portfolio-card">
            {/* <img className="portfolio-img" src={projects.projectImg}></img> */}
            <div className="portfolio-title">{projects.title}</div>
            {/* <div className='portfolio-desc'>TEST</div> */}
          </div>
        );
      })}
    </div>
    </>
  );
}
