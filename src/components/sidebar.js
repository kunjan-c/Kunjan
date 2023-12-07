import React, { createContext, useContext, useEffect } from "react";
import LogoWithTitle from "./Logo/logoWithTitle";
import styles from "./sidebar.module.css";
import { useState } from "react";
const clickedMenuOption = createContext();
export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("about");

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
    setSelectedMenu(e.target.id);
  };

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);
  return (
    <clickedMenuOption.Provider value={"varsha"}>
      <div className={styles.sidebarMainContainer}>
        <LogoWithTitle></LogoWithTitle>

        <div className={styles.sidebarSection}>
          {sidebarOptions.map((option, i) => {
            return (
              <div className={styles.sidebarOptionContainer} key={i + 12}>
                <a href={`#${option.id}`}>
                  <div
                    className={styles.optionText}
                    // id={option.id}
                    onClick={(e) => onMenuOptionClickHandler(e)}
                  >
                    {option.displayName}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </clickedMenuOption.Provider>
  );
}

export { clickedMenuOption };
