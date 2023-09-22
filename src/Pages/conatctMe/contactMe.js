import React from "react";
import "./contactMe.css";
import facebook from "asset/img/facebook-g2f441716f_1280.png";
import whatsApp from "asset/img/whatsapp-gedd9623b0_1280.png";
import instagram from "asset/img/instagram-g5f45ac6b7_1280.png";
import linkdin from "asset/img/linkedin_3536505.png";
import DownloadResumeBtn from "components/downloadResumeBTn/downloadResumeBtn";
export default function ContactMe() {
  return (
    <div className="form-container">
      {/* <div className="main-title">Contact Me</div> */}
      <div className="connect-us-container">
        <div className="main-title">Contact Me</div>
        <div className="form-and-social-media-container">
          {/* <form className="form-tag">
            <div className="form-input-container">
              <label htmlFor="name">Name</label>
              <input className="form-input" type="text" id="name"></input>
            </div>
            <div className="form-input-container">
              <label htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email"></input>
            </div>
            <div className="form-input-container">
              <label htmlFor="message">Message</label>
              <textarea className="form-input" id="message"></textarea>
            </div>
            <button className="contact-me-button ">CONTACT</button>
          </form> */}
          <div className="social-media-connect-container">
            <div className="connect-text contact-us-section-subtitle">
            Let's Collaborate
            </div>
            <div className="lets-connect-desc">
            If you're looking for a frontend engineer genuinely enthusiastic about delivering exceptional results, I'd love to explore how I can contribute to the success of your project. Feel free to reach out to me .
            </div>
            <div className="contcat-info-text">Email : choudharykunjan@gmail.com</div>
            <div className="contcat-info-text">Contact : +91 9167428797</div>
            <div className="social-icons-container">
              <a href="https://www.linkedin.com/in/kunjan-choudhary-8a73b411b/" target="__blank"><img className="social-icons " src={linkdin}></img></a>
              {/* <img className="social-icons" src={instagram}></img>
              <img className="social-icons" src={facebook}></img>
              <img className="social-icons" src={whatsApp}></img> */}
            </div>
            <DownloadResumeBtn></DownloadResumeBtn>
          </div>
       
        </div>
      </div>
    </div>
  );
}
