import React, { Fragment } from "react";
import kunjanImg from "asset/img/kunjan_img2 2.png";
import "./homepage.css";
import KLogo from "asset/img/k_logo.png";

export default function Homepage() {
  return (
    <Fragment>
      <div className="homepage-container">
        <div className="homepage-intro">
          <div className="intro-text">Hi,</div>
          <div>
            <span className="intro-text">I'm </span>
            <span>
              <img src={KLogo} className="K-text-intro" alt="kLogo"></img>
              <span className="intro-text">unjan</span>
            </span>
    
          </div>
          <div>
              <span className="intro-text">Web Developer</span>
            </div>
        </div>
        <div className="homepage-main-img">
          <img className="homepage-k-Img" src={kunjanImg}></img>
        </div>
      </div>
    </Fragment>
  );
}
