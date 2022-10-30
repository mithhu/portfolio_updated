import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div className="darkMode">
      <button
        onClick={() => toggleTheme()}
        style={{ cursor: "pointer", border: "none", background: "none" }}
      >
        {theme === "dark" ? (
          <MdLightMode size={40} color="yellow" />
        ) : (
          <MdDarkMode size={40} />
        )}
      </button>
    </div>
  );
}
