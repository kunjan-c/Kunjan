import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import LogoWithTitle from "./Logo/logoWithTitle";
import styles from "./sidebar.module.css";

const clickedMenuOption = createContext();

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("about");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef(null);

  const sidebarOptions = [
    { displayName: "Home", id: "home" },
    { displayName: "About", id: "about" },
    { displayName: "Skills", id: "skills" },
    { displayName: "Experience", id: "experience" },
    { displayName: "Education", id: "education" },
    { displayName: "My Work", id: "projects" },
    { displayName: "Contact", id: "contact" },
  ];

  // Auto-highlight based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // improved threshold
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && id !== selectedMenu) {
          setSelectedMenu(id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sidebarOptions.forEach((option) => {
      const section = document.getElementById(option.id);
      if (section) observerRef.current.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selectedMenu]);

  // Scroll-up-reveal sidebar behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 400) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Click handler for menu options
  const onMenuOptionClickHandler = (optionId, e) => {
    e.preventDefault();
    setSelectedMenu(optionId);

    const section = document.getElementById(optionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Prevent observer from interfering momentarily
      observerRef.current?.disconnect();
      setTimeout(() => {
        sidebarOptions.forEach((option) => {
          const sec = document.getElementById(option.id);
          if (sec) observerRef.current?.observe(sec);
        });
      }, 1000);
    }
  };

  return (
    <clickedMenuOption.Provider value={selectedMenu}>
      <div
        className={`${styles.sidebarMainContainer} ${
          isVisible ? styles.show : styles.hide
        }`}
      >
        <LogoWithTitle />
        <div className={styles.sidebarSection}>
          {sidebarOptions.map((option) => (
            <div className={styles.sidebarOptionContainer} key={option.id}>
              <a
                href={`#${option.id}`}
                onClick={(e) => onMenuOptionClickHandler(option.id, e)}
                className={`${styles.optionText} ${
                  selectedMenu === option.id ? styles.active : ""
                }`}
              >
                {option.displayName}
              </a>
            </div>
          ))}
        </div>
      </div>
    </clickedMenuOption.Provider>
  );
}

export { clickedMenuOption };
