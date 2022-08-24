import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/amos-kibet",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/amos-kibet",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
