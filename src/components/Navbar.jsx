import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";
import "../styles/Navbar.css";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  // useTheme 
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="nav__wrapper container">
        <div className="nav__logo">
          <LogoIcon />
          <p>doc-mdx</p>
          <button
            onClick={toggleTheme}
            className="nav__icon"
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}