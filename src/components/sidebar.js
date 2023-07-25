import React from "react";
import LogoWithTitle from "./Logo/logoWithTitle";
import styles from "./sidebar.module.css";
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
      id: "mywork",
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

  const onMenuOptionClickHandler = (e) => {
    console.log(e, e.target.id);
    
  };
  return (
    <div className={styles.sidebarMainContainer}>
      <LogoWithTitle></LogoWithTitle>
      <div className={styles.sidebarSection}>
        {sidebarOptions.map((option, i) => {
          return (
            <div className={styles.sidebarOptionContainer} key={i + 12}>
              <div
                className={styles.optionText}
                id={option.id}
                onClick={(e) => onMenuOptionClickHandler(e)}
              >
                {option.displayName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
