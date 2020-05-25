import React, { useState } from "react";
import "./App.css";
import menu from "./assets/icon/open-menu.svg";

function App() {
  const [toggleSidebar, settoggleSidebar] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div className={`sidebar ${toggleSidebar ? "mobileSidebar" : ""}`}>
        <p onClick={() => settoggleSidebar(!toggleSidebar)}>Mithhu</p>
        <p onClick={() => settoggleSidebar(!toggleSidebar)}>Projects</p>
        <p onClick={() => settoggleSidebar(!toggleSidebar)}>Skills</p>
        <p onClick={() => settoggleSidebar(!toggleSidebar)}>Achievemnts</p>
        <p onClick={() => settoggleSidebar(!toggleSidebar)}>Certifications</p>
      </div>
      <div>
        <img
          alt="menu"
          onClick={() => settoggleSidebar(!toggleSidebar)}
          className={`filter-green ${
            toggleSidebar ? "burger" : "burgerMobile"
          }`}
          src={menu}
          style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
        />
        Components
      </div>
    </div>
  );
}

export default App;
