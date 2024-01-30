import { LogoIcon, MoonIcon } from "./assets/icons";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav__wrapper container">
        <div className="nav__logo">
          <LogoIcon />
          <p>doc-mdx</p>
          <button className="nav__icon"><MoonIcon /></button>
        </div>
      </div>
    </header>
  )
}