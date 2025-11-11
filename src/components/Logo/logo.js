import React from "react";
import KLogo from "asset/img/k_logo.png";
import styles from "./logo.module.css";
export default function Logo() {
  return (
    <div className={styles.mainLogoContainer}>
      <img src={KLogo} className={styles.kLogoImg} alt="kLogo"></img>
    </div>
  );
}
