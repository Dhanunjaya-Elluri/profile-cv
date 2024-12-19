import React from "react";
import SocialLinks from "./SocialLinks";
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
        "Specialized in Large Language Models and MLOps with focus on AI compliance and safety",
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
        "Python, PyTorch, AWS, Azure, Docker, Kubernetes, and modern MLOps tools",
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
          <span className="wave">👋</span>
          <h1>Hey, I&apos;m Dhanunjaya Elluri</h1>
        </div>
        <h2>
          Machine Learning Engineer crafting AI solutions that are both powerful
          and compliant.
        </h2>

        <p className="current-work">
          With a passion for responsible AI development, I specialize in
          building and deploying Large Language Models at scale. Currently,
          I&apos;m a Machine Learning Engineer at{" "}
          <a
            href="https://validaitor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Validaitor
          </a>{" "}
          where I develop solutions to make LLMs compliant with the EU AI Act,
          ensuring they meet both technical excellence and regulatory standards.
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
          <img src={profileImage} alt="Profile" />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile;
