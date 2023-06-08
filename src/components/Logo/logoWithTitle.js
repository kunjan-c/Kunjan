import React from "react";
import Logo from "./logo";

export default function LogoWithTitle() {
  return (
    <div className="horizontal-center">
      <Logo></Logo>
      <div className="horizontal-center logo-title-container padding10">
        <div className="horizontal-center logo-subtitle-text">Kunjan</div>
        <div className="horizontal-center logo-subtitle-text">Web Developer</div>
      </div>
    </div>
  );
}
