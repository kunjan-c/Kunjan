import React from 'react';
import "./education.css";
import schoolImg from "asset/img/school.png";
import collegeImg from "asset/img/highScool2.png";
import graduationPlace from "asset/img/univarsity.png";
import PostGraduateGirl from "asset/img/graduationHat.png";

export default function Education() {
  return (
    <>
      <div className="section-title">Education</div>
      <div className="education-section">
        <div className="step4">
          <img className="education-stage" src={PostGraduateGirl} alt="education-stage" />
          <div className="education-title">Mumbai University</div>
          <div className="education-desc">Mcom Post Graduate</div>
          <div className="education-desc">2016-2018</div>
        </div>
        <div className="step4">
          <img className="education-stage" src={graduationPlace} alt="education-stage" />
          <div className="education-title">Vivek College Of Commerce</div>
          <div className="education-desc">Bcom Graduate</div>
          <div className="education-desc">2013-2016</div>
        </div>
        <div className="step4">
          <img className="education-stage" src={collegeImg} alt="education-stage" />
          <div className="education-title">Vivek Vidyalaya</div>
          <div className="education-desc">HSC</div>
          <div className="education-desc">2011-2013</div>
        </div>
        <div className="step4">
          <img className="education-stage" src={schoolImg} alt="education-stage" />
          <div className="education-title">S. M. V. M.</div>
          <div className="education-desc">SSC</div>
          <div className="education-desc">2000-2010</div>
        </div>
      </div>
    </>
  );
}
