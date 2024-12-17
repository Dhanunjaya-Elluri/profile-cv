import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="mailto:dhanunjayet@gmail.com" title="Email">
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/Dhanunjaya-Elluri"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/dhanunjaya-elluri/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/dhanunjayet"
        target="_blank"
        rel="noopener noreferrer"
        title="X (Twitter)"
      >
        <RiTwitterXFill />
      </a>
      <a
        href="https://www.instagram.com/dhanunjay_e/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
