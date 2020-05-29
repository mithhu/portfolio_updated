import React, { useState } from "react";
import "./App.css";
import menu from "./assets/icon/open-menu.svg";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() {
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
      </div>
      <div>
        <img
          alt="menu"
          onClick={() => settoggleSidebar(!toggleSidebar)}
          className={`${toggleSidebar ? "burger" : "burgerMobile"}`}
          src={menu}
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
          {activeMenu === "about" && <About />}
          {activeMenu === "projects" && <Projects />}
          {activeMenu === "experience" && <Experience />}
          {activeMenu === "achievements" && <Achievements />}
        </div>
      </div>
    </div>
  );
}

export default App;
