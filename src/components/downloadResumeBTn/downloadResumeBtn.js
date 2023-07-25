import React from "react";
import "./downloadResumeBtn.css";
import resume from "asset/pdf/Kunjan_Resume_2023.pdf";
export default function DownloadResumeBtn() {
  return (
    <div className="download-btn-container-main">
      <a className="basic-button" href={resume} target="__blank">
        My Resume
      </a>
    </div>
  );
}
