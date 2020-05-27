import React, { useState } from "react";
import "./App.css";
import menu from "./assets/icon/open-menu.svg";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("about");
  const handleChange = (menu) => {
    // // console.log("menu", menu);
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
            marginLeft: "2rem",
            marginTop: "1.5rem",
            zIndex: 1,
          }}
        />
        <div
          onClick={() => settoggleSidebar(false)}
          style={{ height: "100vh" }}
          className={`${toggleSidebar ? "blurBackground" : ""}`}
        >
          {activeMenu === "about" && <About />}
          {activeMenu === "projects" && <Projects />}
        </div>
      </div>
    </div>
  );
}

export default App;
