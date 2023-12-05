import React from "react";
import "./skills.css";
import reduxColorLogo from "asset/svg/redux_color_logo.svg";
import reduxGreyLogo from "asset/svg/redux_gray_logo.svg";

import htmlColorLogo from "asset/img/htmlImg2.png";
import htmlGreyLogo from "asset/img/html_grey.png";
import cssGreyLogo from "asset/img/css3_grey.png";
import cssColorLogo from "asset/img/cssImg2.png";

import jsGreyLogo from "asset/img/js_grey_logo.png";
import jsColorLogo from "asset/img/js_color_logo.png";

import reactGreyLogo from "asset/img/react_grey_logo.png";
import reactColorLogo from "asset/img/reactImg2.png";

import btGreyLogo from "asset/img/bootstrap_grey_logo.png";
import btColorLogo from "asset/img/bootstrapImg2.png";

import nextGreyLogo from "asset/svg/next-color-logo.svg";
import nextColorLogo from "asset/svg/logo_next-color.svg";

import wordpressColorLogo from "asset/svg/wordpress_color_logo.svg";
import wordpressGreyLogo from "asset/svg/wordpress_grey_logo.svg";

import reactRouterColorLogo from "asset/svg/react-router-color.svg";
import reactRouterGreyLogo from "asset/svg/react_router_grey-logo.svg";

import npmColorLogo from "asset/svg/npm_color_logo.svg";
import npmGreyLogo from "asset/svg/npm _grey_logo.svg";

import nodeColorLogo from "asset/svg/node_color_logo.svg";
import nodeGreyLogo from "asset/svg/node_grey_logo.svg";

import gitColorLogo from "asset/svg/git_logo_color.svg.svg";
import gitGreyLogo from "asset/svg/git_grey_logo.svg";
export default function Skills() {
  const mySkills = [
    {
      id: 1,

      skillName: "React",
      grayImg: reactGreyLogo,
      colorImg: reactColorLogo,
    },
    {
      id: 5,
      skillName: "HTML",
      grayImg: htmlGreyLogo,
      colorImg: htmlColorLogo,
    },
    {
      id: 10,
      skillName: "CSS",
      grayImg: cssGreyLogo,
      colorImg: cssColorLogo,
    },

    {
      id: 15,
      skillName: "Bootstrap",
      grayImg: btGreyLogo,
      colorImg: btColorLogo,
    },
    {
      id: 20,
      skillName: "Redux",
      grayImg: reduxGreyLogo,
      colorImg: reduxColorLogo,
    },
    // {
    //   id: 25,
    //   skillName: "Bootstrap",
    //   grayImg: btGreyLogo,
    //   colorImg: btColorLogo,
    // },
    {
      id: 25,
      skillName: "JavaScript",
      grayImg: jsGreyLogo,
      colorImg: jsColorLogo,
    },
    {
      id: 30,
      skillName: "NextJs",
      grayImg: nextGreyLogo,
      colorImg: nextColorLogo,
    },
    {
      id: 55,
      skillName: "WordPress",
      grayImg: wordpressGreyLogo,
      colorImg: wordpressColorLogo,
    },
    {
      id: 50,
      skillName: "React-Router",
      grayImg: reactRouterGreyLogo,
      colorImg: reactRouterColorLogo,
    },
    {
      id: 45,
      skillName: "Node",
      grayImg: npmGreyLogo,
      colorImg: npmColorLogo,
    },
    {
      id: 40,
      skillName: "Git",
      grayImg: gitGreyLogo,
      colorImg: gitColorLogo,
    },
    {
      id: 35,
      skillName: "NodeJs",
      grayImg: nodeGreyLogo,
      colorImg: nodeColorLogo,
    },
  ];

  return (
    <div className="homepage-section-container" id="skills">
      <div className="main-title">Skills</div>
      {/* <div className="summary-text-container">
        <div className="summary">
          I am skilled in HTML5, CSS3, JavaScript, JSON, TypeScript, and ES6. My
          expertise includes ReactJS, Redux, NextJs, React Hooks, React Router,
          Bootstrap, React-Bootstrap, React-Vis (Chart Library), and Material
          UI. I am experienced in using Visual Studio Code, NPM, Chrome Debug
          Tools, GitHub, Git, BitBucket, JIRA. I have knowledge of cross-browser
          compatibility, responsive design, and proficiency in Canva, GIMP, and
          Figma for graphics editing.
        </div>
        <div className="skill-right-container">
          <SkillsMarquee></SkillsMarquee>
        </div>
      </div> */}
      <div className="skill-card-container">
        {mySkills.map((skills) => {
          return (
            <div className="card-container">
              <img className="skill-logo-img" src={skills.colorImg}></img>
              <div className="img-title">{skills.skillName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
