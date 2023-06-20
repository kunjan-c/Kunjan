import React from "react";
import leftArrow from "asset/svg/left_arrow.svg";
import rightArrow from "asset/svg/right_face_arrow.svg";
import slashIcon from "asset/svg/purpule_slash_icon.svg";
import reduxColorLogo from "asset/svg/redux_color_logo.svg";
import reduxGreyLogo from "asset/svg/redux_gray_logo.svg";

import htmlColorLogo from "asset/img/html_logo_color.png";
import htmlGreyLogo from "asset/img/html_grey.png";
import cssGreyLogo from "asset/img/css3_grey.png";
import cssColorLogo from "asset/img/css_color_logo.png";

import jsGreyLogo from "asset/img/js_grey_logo.png";
import jsColorLogo from "asset/img/js_color_logo.png";

import reactGreyLogo from "asset/img/react_grey_logo.png";
import reactColorLogo from "asset/img/react_color_logo.png";

import btGreyLogo from "asset/img/bootstrap_grey_logo.png";
import btColorLogo from "asset/img/bootstrap_colo.png";

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
export default function SkillsMarquee() {
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
    <div className="skills-marquee-main-container">
      <div className="marquee-main-section">
        <img className="left-arraow-img" src={leftArrow}></img>
        <img className="slashIcon" src={slashIcon}></img>
        <div  behavior="alternate" direction="right" width="100%" className="images-container">
          {mySkills.map((el) => {
            return (
              <div className="single-img-container">
                <img className="main-img-of-marquee" src={el.colorImg}></img>
              </div>
            );
          })}
        </div>
        <img className="right-arraow-img" src={rightArrow}></img>
      </div>
      {/* <div className="marquee-conainer">by</div> */}
    </div>
  );
}
