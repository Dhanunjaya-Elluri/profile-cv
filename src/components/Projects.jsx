import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import narwhalsLogo from "./images/narwhals.png";
import littleBookOfMLMetricsLogo from "./images/nannyml.png";
import tuLogo from "./images/tu-logo.png";

const Projects = () => {
  const projects = [
    {
      title: "Narwhals",
      icon: <img src={narwhalsLogo} alt="Narwhals" className="project-icon" />,
      description:
        "Narwhals is an open-source Python library that provides a compatibility layer between dataframe libraries like Pandas, PyArrow, Polars, Modin, etc.",
      githubUrl: "https://github.com/narwhals-dev/narwhals",
      contributions: [
        "Contributed to the core narwhals library",
        "Added new feature `var` to calculate variance to this library",
        "Improved documentation and examples",
      ],
    },
    {
      title: "The Little Book of ML Metrics",
      icon: (
        <img
          src={littleBookOfMLMetricsLogo}
          alt="The Little Book of ML Metrics"
          className="project-icon"
        />
      ),
      description:
        "NannyML's The Little Book of ML Metrics is an open-source book that provides a comprehensive guide to machine learning metrics.",
      githubUrl: "https://github.com/nannyML/the-little-book-of-ml-metrics",
      contributions: [
        "Contributed to the book by adding new chapters and metrics on various machine learning metrics",
        "Added new metrics and formulas including graphs to the book",
      ],
    },
    {
      title: "Transformers for Quantized Time Series Forecasting",
      icon: <img src={tuLogo} alt="TU Logo" className="project-icon" />,
      description:
        "Master's Thesis on Transformers for Quantized Time Series Forecasting",
      githubUrl: "https://github.com/Dhanunjaya-Elluri/master-thesis",
      contributions: [
        "Explored SAX, Kernel-SAX & Quantile methods for time series quantization",
        "Implemented multiple Transformer variants for time series forecasting",
        "Achieved 30% performance improvement in training & inference",
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
