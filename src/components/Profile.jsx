import React from "react";
import SocialLinks from "./SocialLinks";
import ProfileVisits from "./ProfileVisits";
import profileImage from "./images/profile-image.png";
import {
  FaAward,
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const Profile = () => {
  const highlights = [
    {
      icon: <FaBrain />,
      title: "ML Expertise",
      description:
        "Specialized in Data Driven Models and MLOps with focus on AI compliance and safety",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Master's in Data Science from TU Dortmund University, Germany",
    },
    {
      icon: <FaLaptopCode />,
      title: "Tech Stack",
      description:
        "Python, PyTorch, AWS, Azure, Docker, Power BI, and modern MLOps tools",
    },
    {
      icon: <FaAward />,
      title: "Experience",
      description:
        "Worked with startups and enterprises for over 5 years to build production-ready ML systems",
    },
  ];

  return (
    <div className="profile">
      <div className="profile-content">
        <div className="intro">
          <div className="mobile-profile-image">
            <img
              src={profileImage}
              alt="Ashish Saini"
              loading="eager"
            />
          </div>
          <div className="intro-text">
            <div className="intro-header">
              <h1>
                <span className="wave">👋</span>
                Hey, I'm Ashish Saini
              </h1>
              <ProfileVisits />
            </div>
          </div>
        </div>
        <h2>
          A data-driven thinker who loves to built smart, scalable solutions for
          real-world problems - from pipelins to predictions
        </h2>

        <p className="current-work">
          I&apos;m a machine learning enthusiast with a strong interest in building AI systems that
          are not just powerful, but also responsible and impactful. I graduated with a Master’s in
          Data Science from{" "}
          <a
            href="https://www.tu-dortmund.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TU Dortmund
          </a>{" "}
          and recently completed an intenship at{" "}
          <a
            href="https://www.munichre.com/de.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Munich Re
          </a>{" "}
          where I worked on real-world AI applications in the insurance domain.
          Now, I’m actively looking for opportunities where I can apply my skills, keep learning,
          and contribute to meaningful, data-driven projects.
        </p>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-header">
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
              </div>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-right">
        <div className="profile-image">
          <img
            src={profileImage}
            alt="Ashish Saini"
            loading="eager"
          />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile;