import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [tooltip, setTooltip] = useState("");
  const [hideTooltip, setHideTooltip] = useState(false);

  const handleIconClick = () => {
    window.scrollTo({ top: 0 });
    navigate('/');
  };

  const toggleTheme = () => {
    setHideTooltip(true);
    setDarkMode(!darkMode);
  };

  const switchTooltip = () => {
      setTooltip(darkMode ? "Switch to light mode" : "Switch to dark mode")
  };

  const onMouseLeave = () => {
    setHideTooltip(false);
  };

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
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            onMouseEnter={switchTooltip}
            onMouseLeave={onMouseLeave}
          >
            {darkMode ? "☀️" : "🌙"}
            {!hideTooltip && tooltip && <span className="tooltip">{tooltip}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;