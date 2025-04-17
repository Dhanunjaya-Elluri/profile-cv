import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="mailto:ashishsaini.maiet@gmail.com" title="Email">
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/ashishsaini01"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ashish-saini-p/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/ashishs26371012"
        target="_blank"
        rel="noopener noreferrer"
        title="X (Twitter)"
      >
        <RiTwitterXFill />
      </a>
      <a
        href="https://www.instagram.com/ashishsaini16/"
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