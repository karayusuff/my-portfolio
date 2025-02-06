import { useState, useEffect } from "react";
import { BsCodeSlash } from "react-icons/bs";
import "../styles/Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <BsCodeSlash className="nav-logo" /> 
        </div>
        <div className="nav-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;