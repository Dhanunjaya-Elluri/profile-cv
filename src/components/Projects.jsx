import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import tuLogo from "./images/tu-logo.png";

const Projects = () => {
  const projects = [
    {
      title: " Enhancing uncertainty estimation and outlier detection.",
      icon: <img src={tuLogo} alt="TU Logo" className="project-icon" />,
      description:
        "Master's Thesis on Enhancing uncertainty estimation and outlier detection through confidence calibration for out-of-distribution data",
      githubUrl: "https://github.com/ashishsaini01/master-thesis",
      contributions: [
        "Explored Uncertainty Estimation and Outlier Expousure methods for improving the performance of the model",
        "Implemented Decomposed confidence architecture for out-of-distribution detection",
        "Achieved 20% reduction in Soft-Binned Expected Calibration Error (SB-ECE)",
      ],
    },
    {
      title: "Anomaly Detection for Reidentification",
      icon: <img src={tuLogo} alt="TU Logo" className="project-icon" />,
      description:
        "Applied unsupervised anomaly detection techniques for reidentification of pallet blocks",
      githubUrl: "https://github.com/ashishsaini01/Anomaly_detection_using_autoencoders",
      contributions: [
        "Contributed to the ongoing project by impelmenting Auto-encoder architecutre with SSIM loss function",
        "Achieved 20% improvement in detection accuracy",
        "Implemented a high-confidence object detection model to identify logistic objects"
      ],
    },
    {
      title: "Anomaly Detection on Time Series Data",
      icon: <img src={tuLogo} alt="TU Logo" className="project-icon" />,
      description:
        "Caes Study on Time series processing, anomaly detection and explanation with focus on Energy consumption data",
      contributions: [
        "Explored DGHL and MCMC methods for time series anomaly dectection",
        "Detected anomolies in energy consumption data with 70% accuracy",
      ],
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Selected Projects</h1>
        <p className="projects-intro">
          I enjoy making things. Here are my top 3 favorite projects that I have
          contributed or worked on over the years.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon-container">{project.icon}</div>
              <h2>{project.title}</h2>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <ul className="project-contributions">
                {project.contributions.map((contribution, idx) => (
                  <li key={idx}>{contribution}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                  <span>GitHub</span>
                  <FaExternalLinkAlt className="external-link-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;