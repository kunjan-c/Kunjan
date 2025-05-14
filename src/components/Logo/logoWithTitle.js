import React from "react";
import Logo from "./logo";
import "../../App.css";
export default function LogoWithTitle() {
  return (
    <div className="horizontal-center">
      <Logo></Logo>
      <div className="horizontal-center logo-title-container padding10">
        <div className=" logo-subtitle-text">Kunjan</div>
        <div className=" logo-subtitle-text">Frontend Developer</div>
      </div>
    </div>
  );
}
