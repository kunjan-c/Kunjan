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

  const sidebarOptions = [
    { displayName: "Home", id: "home" },
    { displayName: "About", id: "about" },
    { displayName: "Skills", id: "skills" },
    { displayName: "Experience", id: "experience" },
    { displayName: "Education", id: "education" },
    { displayName: "My Work", id: "projects" },
    { displayName: "Contact", id: "contact" },
  ];

  const observerRef = useRef(null);

  // Auto-highlight based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setSelectedMenu(id);
          }
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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Scroll-up-reveal sidebar behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 400) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const onMenuOptionClickHandler = (optionId, e) => {
    e.preventDefault();
    setSelectedMenu(optionId);
    const section = document.getElementById(optionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
