import React, { createContext, useEffect, useState } from "react";
import LogoWithTitle from "./Logo/logoWithTitle";
import styles from "./sidebar.module.css";

const clickedMenuOption = createContext();

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("about");

  const sidebarOptions = [
    { displayName: "About", id: "about" },
    { displayName: "Skills", id: "skills" },
    { displayName: "My Work", id: "projects" },
    { displayName: "Experience", id: "experience" },
    { displayName: "Contact", id: "contact" },
  ];

  const onMenuOptionClickHandler = (optionId, e) => {
    e.preventDefault();
    setSelectedMenu(optionId);

    const section = document.getElementById(optionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log("Selected menu:", selectedMenu);
  }, [selectedMenu]);

  return (
    <clickedMenuOption.Provider value={selectedMenu}>
      <div className={styles.sidebarMainContainer}>
        <LogoWithTitle />
        <div className={styles.sidebarSection}>
          {sidebarOptions.map((option, i) => (
            <div className={styles.sidebarOptionContainer} key={option.id}>
              <a href={`#${option.id}`}>
                <div
                  className={`${styles.optionText} ${
                    selectedMenu === option.id ? styles.active : ""
                  }`}
                  onClick={(e) => onMenuOptionClickHandler(option.id, e)}
                >
                  {option.displayName}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </clickedMenuOption.Provider>
  );
}

export { clickedMenuOption };
