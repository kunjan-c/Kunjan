import React from "react";
import LogoWithTitle from "./Logo/logoWithTitle";
import styles from "./sidebar.module.css"
export default function Sidebar() {
  let sidebarOptions = [
    {
      displayName: "About",
      id: "about",
    },
    {
      displayName: "Skills",
      id: "skills",
    },
    {
      displayName: "My Work",
      id: "my_work",
    },
    {
      displayName: "Expirience",
      id: "expirience",
    },
    {
      displayName: "Contact",
      id: "contact",
    },
  ];
  return (
    <div className={styles.sidebarMainContainer}>
      <LogoWithTitle></LogoWithTitle>
      <div className={styles.sidebarSection}>
        {sidebarOptions.map((option, i) => {
          return (
            <div className={styles.sidebarOptionContainer} key={i + 12}>
              <div className={styles.optionText} id={option.id}>{option.displayName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
