import React, { useState } from "react";
import "./App.css";
import menu from "./assets/icon/open-menu.svg";
import About from "./components/About";

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
      <div className={`sidebar ${toggleSidebar ? "mobileSidebar" : ""}`}>
        <p
          style={{
            cursor: "pointer",
            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "about" ? "#475AEA" : ""}`,
          }}
          className="linkHover"
          onClick={() => handleChange("about")}
        >
          About
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "projects" ? "#475AEA" : ""}`,
          }}
          className="linkHover"
          onClick={() => handleChange("projects")}
        >
          Projects
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "skills" ? "#475AEA" : ""}`,
          }}
          className="linkHover"
          onClick={() => handleChange("skills")}
        >
          Skills
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "achievements" ? "#475AEA" : ""}`,
          }}
          className="linkHover"
          onClick={() => handleChange("achievements")}
        >
          Achievemnts
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "certifications" ? "#475AEA" : ""}`,
          }}
          className="linkHover"
          onClick={() => handleChange("certifications")}
        >
          Certifications
        </p>
      </div>
      <div>
        <img
          alt="menu"
          onClick={() => settoggleSidebar(!toggleSidebar)}
          className={`filter-green ${
            toggleSidebar ? "burger" : "burgerMobile"
          }`}
          src={menu}
          style={{
            width: "2rem",
            height: "2rem",
            cursor: "pointer",
            position: "fixed",
          }}
        />
        {activeMenu === "about" && <About />}
      </div>
    </div>
  );
}

export default App;
