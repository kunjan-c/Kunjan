import React from "react";
import "./expirience.css";
import cs from "asset/img/companyIllustartion.png";
import soleCompany from "asset/img/sole_company.png";
import freelancing from "asset/img/freelancing.png";
export default function Expirience() {
  return (
    <>
      <div className="main-title">Expirience</div>
      <div className="exp-container">
        <div className="single-exp-container">
          <img src={soleCompany} className="company-type-img"></img>
          <div className="company-name">Jackson N Softwear Solution</div>
          <div className="company-name">Jun 2021 - Jun 2022</div>
        </div>
        <div className="single-exp-container">
          <img src={cs} className="company-type-img"></img>
          <div className="company-name">Controlshift</div>
          <div className="company-name">Jun 2022 - May 2023</div>
        </div>
        <div className="single-exp-container">
          <img src={freelancing} className="company-type-img"></img>
          <div className="company-name">Freelancing</div>
          <div className="company-name"> May 2023 - Present</div>
        </div>
      </div>
    </>
  );
}
