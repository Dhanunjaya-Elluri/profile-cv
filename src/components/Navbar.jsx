import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaQuoteRight, 
  FaBlog,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/bio", label: "About", icon: <FaUser /> },
    { path: "/experience", label: "Experience", icon: <FaBriefcase /> },
    { path: "/projects", label: "Projects", icon: <FaCode /> },
    { path: "/testimonials", label: "Testimonials", icon: <FaQuoteRight /> },
    { path: "/blog", label: "Blog", icon: <FaBlog /> },
  ];

  const socialLinks = [
    { icon: <FaEnvelope />, url: "mailto:dhanunjayet@gmail.com" },
    { icon: <FaGithub />, url: "https://github.com/Dhanunjaya-Elluri" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/dhanunjaya-elluri" },
    { icon: <FaXTwitter />, url: "https://twitter.com/dhanunjayet" },
    { icon: <FaInstagram />, url: "https://instagram.com/dhanunjay_e" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className="header">
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path ||
                (item.path === "/bio" && location.pathname === "/")
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
          <div className="nav-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <BsSun className="theme-icon" /> : <BsMoonStars className="theme-icon" />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
