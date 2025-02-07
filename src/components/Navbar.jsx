import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handleIconClick = () => {
    window.scrollTo({ top: 0 });
    navigate('/');
  };

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
          <BsCodeSlash className="nav-logo" onClick={handleIconClick} /> 
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