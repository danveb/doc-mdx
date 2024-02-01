/* eslint-disable react/no-unescaped-entities */
import { textSections } from "../constants";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__wrapper text__container">
        {textSections.map((section) => (
          <div key={section.id}>
            <div className="about__main">
              {section.head && <p className="title">{section.head}</p>}
              {section.subhead && <p className="subtitle">{section.subhead}</p>}
            </div>
            <div className="about__sub">
              {section.title && <p className="title">{section.title}</p>}
              {section.text && <p className="text">{section.text}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}