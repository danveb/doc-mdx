import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";
import "../styles/Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Navbar() {
  // useContext 
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <div className="nav__wrapper container">
        <div className="nav__logo">
          <LogoIcon />
          <p>doc-mdx</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="nav__icon"
          >
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}