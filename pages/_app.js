import React, { useState, useEffect } from "react";
import "../styles.css";
import "react-medium-image-zoom/dist/styles.css";
import "react-vertical-timeline-component/style.min.css";
import Router from "next/router";
import Menu from "../public/open-menu.svg";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Certifications from "../components/Certfications";
import { AiOutlineFilePdf } from "react-icons/ai";

import * as gtag from "../lib/gtag";
import DarkMode from "../components/DarkMode";

function App() {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("about");
  const handleChange = (menu) => {
    setActiveMenu(menu);
    settoggleSidebar(!toggleSidebar);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className={`sidebar ${
          toggleSidebar ? "mobileSidebar" : "mobileSidebarHide"
        }`}
      >
        <p
          style={{
            cursor: "pointer",
            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "about" ? "black" : ""}`,
            color: `${activeMenu === "about" ? "#e31b6d" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("about")}
        >
          About
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "experience" ? "black" : ""}`,
            color: `${activeMenu === "experience" ? "#e31b6d" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("experience")}
        >
          Experience
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "projects" ? "black" : ""}`,
            color: `${activeMenu === "projects" ? "#e31b6d" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("projects")}
        >
          Projects
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "achievements" ? "black" : ""}`,
            color: `${activeMenu === "achievements" ? "#e31b6d" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("achievements")}
        >
          Achievements
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "certifications" ? "black" : ""}`,
            color: `${activeMenu === "certifications" ? "#e31b6d" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("certifications")}
        >
          Certifications
        </p>
        <a href="/Mahamudul_Portfolio.pdf" target="_blank">
          <p
            style={{
              cursor: "pointer",

              padding: ".5rem 1.5rem",
              margin: 0,
              background: `${activeMenu === "portfolio" ? "black" : ""}`,
              color: `${activeMenu === "portfolio" ? "#e31b6d" : "#ffffff"}`,
            }}
            className="menuHover"
            onClick={() => {
              handleChange("about");
            }}
          >
            Portfolio
          </p>
        </a>
      </div>
      <div>
        <Menu
          alt="menu"
          onClick={() => settoggleSidebar(!toggleSidebar)}
          className={`${toggleSidebar ? "burger" : "burgerMobile"}`}
          style={{
            width: "2rem",
            height: "2rem",
            cursor: "pointer",
            position: "fixed",
            marginLeft: "0.5rem",
            marginTop: "1.5rem",
            zIndex: 1,
          }}
        />
        <div
          onClick={() => settoggleSidebar(false)}
          className={`components ${toggleSidebar ? "blurBackground" : ""}`}
        >
          <DarkMode />
          {activeMenu === "about" && <About />}
          {activeMenu === "projects" && <Projects />}
          {activeMenu === "experience" && <Experience />}
          {activeMenu === "achievements" && <Achievements />}
          {activeMenu === "certifications" && <Certifications />}
        </div>
      </div>
    </div>
  );
}

export default App;
