import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <Link
            to="/bio"
            className={
              location.pathname === "/bio" || location.pathname === "/"
                ? "active"
                : ""
            }
          >
            About
          </Link>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active" : ""}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            to="/testimonials"
            className={location.pathname === "/testimonials" ? "active" : ""}
          >
            Testimonials
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <BsSun className="theme-icon" />
          ) : (
            <BsMoonStars className="theme-icon" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
