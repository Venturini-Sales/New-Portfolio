import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../contexts/context";
import { sectionsIdioms } from "../../data/language";
import "./Header.css";
import { useState } from "react";

export const Header = ({ homeRef, aboutMeRef, projectsRef, contactRef }) => {
  const [navBar, setNavBar] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const backgroundChange = () => {
    if (window.scrollY >= 590) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", backgroundChange);
    return () => {
      window.removeEventListener("scroll", backgroundChange);
    };
  }, []);

  return (
    <header className={navBar ? "navBar active" : "navBar"}>
      <motion.div
        initial={{ y: "-20vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <div className="header">
          <div className="logo">
            <h1>&lt;/João Pedro V. Sales&gt;</h1>
          </div>
          <div className="menu">
            <div className="responsiveMenu">
              <input type="checkbox" id="checkbox" onClick={toggleMenu}></input>
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
            <nav className={menuVisible ? "menuVisible" : "menuHidden"}>
              <ul>
                <li
                  onClick={() =>
                    homeRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {sectionsIdioms.home[language]}
                </li>
                <li
                  onClick={() =>
                    aboutMeRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {sectionsIdioms.aboutMe[language]}
                </li>
                <li
                  onClick={() =>
                    projectsRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {sectionsIdioms.projects[language]}
                </li>
                <li
                  onClick={() =>
                    contactRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {sectionsIdioms.contact[language]}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
