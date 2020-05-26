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
            background: `${activeMenu === "about" ? "black" : ""}`,
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
            background: `${activeMenu === "skills" ? "black" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("skills")}
        >
          Skills
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "achievements" ? "black" : ""}`,
          }}
          className="menuHover"
          onClick={() => handleChange("achievements")}
        >
          Achievemnts
        </p>
        <p
          style={{
            cursor: "pointer",

            padding: ".5rem 1.5rem",
            margin: 0,
            background: `${activeMenu === "certifications" ? "black" : ""}`,
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
          }}
        />
        <div
          onClick={() => settoggleSidebar(false)}
          style={{ height: "100vh" }}
          // className={`${toggleSidebar ? "blurBackground" : ""}`}
        >
          {activeMenu === "about" && <About />}
        </div>
      </div>
    </div>
  );
}

export default App;
