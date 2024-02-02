import { Link } from "react-router-dom";
import "../styles/Footer.css";
import gitHub from "./assets/github-mark-white.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <p className="mini__text">© All rights reserved |  danveb</p>
        <Link to="https://www.github.com/danveb" target="_blank" rel="noreferrer noopener">
          <img src={gitHub} alt="github logo" />
        </Link>
      </div>
    </div>
  )
}