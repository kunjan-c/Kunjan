import React from "react";
import "./expirience.css";
import cs from "asset/img/companyImg.png";
import soleCompany from "asset/img/solePropritorImg2.png";
import freelancing from "asset/img/freelancerImg2.png";
import aimdLogo from "../../asset/img/companies/aimd-logo.svg"
export default function Expirience() {
  return (
    <div id="expirience">
      <div className="main-title">Experience</div>
      <div className="exp-container" >
        {/* <div className="single-exp-container">
          <img src={soleCompany} alt="powernox IT solutionst"  className="company-type-img"></img>
          <div className="company-name">PowerNox IT  Solution</div>
          <div className="company-name">July 2020 - Jun 2022</div>
        </div> */}
        <div className="single-exp-container">
          <img src={cs} className="company-type-img" alt="controlsShift"></img>
          <div className="expirience-text-info">
          <div className="company-name"><strong>Controlshift</strong></div>
          <div className="company-name">Jun 2022 - May 2023</div>
          <div className="company-name">Designation - Softwear Engineer</div>
          </div>
        </div>
        <div className="single-exp-container">
          <img src={soleCompany} alt="powernox IT solutionst"  className="company-type-img"></img>
          <div className="expirience-text-info">
          <div className="company-name"><strong>PowerNox IT  Solution</strong></div>
          <div className="company-name">May 2023 - Present</div>
          <div className="company-name">Designation - Softwear Engineer</div>
          </div>
        </div>
        <div className="single-exp-container">
          <img src={aimdLogo} alt="powernox IT solutionst"  className="company-type-img"></img>
          <div className="expirience-text-info">
          <div className="company-name"><strong>PowerNox IT  Solution</strong></div>
          <div className="company-name">May 2023 - Present</div>
          <div className="company-name">Designation - Softwear Engineer</div>
          </div>
        </div>
        {/* /Users/kunjan/OLD_PROJECTS/GOOD_PROJ/MY_PROJ/Kunjan/src/asset/img/companies/black_letters_with_blue_shadow.87e70d1f10a6852521068f1572026cb1 (1).svg */}
        {/* <div className="single-exp-container">
          <img src={freelancing} alt="freelancing" className="company-type-img"></img>
          <div className="company-name">Freelancing</div>
          <div className="company-name"> May 2023 - Present</div>
        </div> */}
      </div>
    </div>
  );
}
