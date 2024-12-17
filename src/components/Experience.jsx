import React from "react";
import { FaBriefcase, FaGraduationCap, FaDownload } from "react-icons/fa";
import Skills from "./Skills";
import resumePDF from "./resume/Dhanunjaya_CV_DE.pdf";

const Experience = () => {
  return (
    <>
      <div className="resume-download">
        <a
          href={resumePDF}
          download="Dhanunjaya_CV_DE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          <FaDownload className="download-icon" />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="experience-container">
        <section className="experience-section">
          <h1>Experience</h1>

          <div className="timeline">
            <div className="timeline-item">
              <div className="icon-container">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h2>Machine Learning Engineer</h2>
                <h3>
                  <a
                    href="https://validaitor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Validaitor
                  </a>
                </h3>
                <p className="timeline-date">January 2024 - Present</p>
                <div className="responsibilities">
                  <p>Responsibilities include:</p>
                  <ul>
                    <li>
                      Mentored a team of 3 junior developers. Participated in
                      code reviews, resulting in a 30% increase in milestone
                      completions and a 20% decrease in coding errors.
                    </li>
                    <li>
                      Built adversarial attack pipelines for testing LLM models
                      to mitigate bias, fairness, privacy, and other safety
                      measures
                    </li>
                    <li>
                      Optimized autoscaling mechanism of celery workers for
                      sending millions of prompt requests, reducing latency by
                      70% and cutting ECS costs by approx. $9000 per month.
                    </li>
                    <li>
                      Transformed existing Validaitor LLM platform into GDPR,
                      ISO 27001 complaint, and managed platform infrastructure
                      in AWS and Azure using Terraform, delivering 99.9% uptime.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="icon-container">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h2>MLOps Engineer Intern</h2>
                <h3>
                  <a
                    href="https://www.munichre.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Munich Re
                  </a>
                </h3>
                <p className="timeline-date">October 2022 - December 2023</p>
                <div className="responsibilities">
                  <p>Responsibilities include:</p>
                  <ul>
                    <li>
                      Development and operation of in-house MLOps platform for
                      compliant one-click hosting of ML models reducing €0.5M+
                      operational costs in Q2 and Q3 of 2023.
                    </li>
                    <li>
                      Proposed and integrated both Databricks & Dataiku Feature
                      Stores into MLOps platform enabling data versioning,
                      governance, and optimized data pipelines.
                    </li>
                    <li>
                      Built an NLP platform for automating the underwriting
                      process, increasing time to delivery of Claims and
                      Underwriting use cases by 70%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="icon-container">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h2>Research Assistant</h2>
                <h3>
                  <a
                    href="https://www.tu-dortmund.de/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Technische Universität Dortmund
                  </a>
                </h3>
                <p className="timeline-date">August 2021 - October 2022</p>
                <div className="responsibilities">
                  <p>Responsibilities include:</p>
                  <ul>
                    <li>
                      Conducted comprehensive statistical analysis and applied
                      clustering and real-time anomaly detection on time series
                      sleep data successfully diagnosing sleep disorders and
                      sleep apnea in 1000+ patients.
                    </li>
                    <li>
                      Research and development of advanced pruning techniques to
                      select the best subset of a trained ensembles to minimize
                      memory footprint and maximize accuracy.
                    </li>
                    <li>
                      Developed a content and collaborative-based recommendation
                      system for TU Dortmund Bibliothek, improving the
                      recommendation of similar e-books and e-journals from
                      extensive collections.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="icon-container">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h2>Data Scientist</h2>
                <h3>
                  <a
                    href="https://www.tcs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tata Consultancy Services
                  </a>
                </h3>
                <p className="timeline-date">June 2018 - May 2021</p>
                <div className="responsibilities">
                  <p>Responsibilities include:</p>
                  <ul>
                    <li>
                      Led client consultations, transforming complex datasets
                      into actionable strategies, culminating in a 70% increase
                      in customer satisfaction.
                    </li>
                    <li>
                      Created an information retrieval pipeline from PDFs using
                      Graph Neural Networks, and BERT for text analysis.
                    </li>
                    <li>
                      Saved ∼500 hours in document processing by creating an
                      efficient NER API using Python, TensorFlow, and MLflow,
                      automating document annotation.
                    </li>
                    <li>
                      Conducted strategic A/B tests for one of Fortune 500
                      client’s platforms, resulting in a 30% uplift in
                      conversion rates, and a 20% rise in average order value.
                    </li>
                    <li>
                      Optimized supply chain operations with a cold start
                      problem with DeepAR model resulting in a 45% improvement
                      in inventory turnover, and a 25% decrease in stockouts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="right-section">
          <section className="education-section">
            <h1>Education</h1>

            <div className="timeline">
              <div className="timeline-item">
                <div className="icon-container">
                  <FaGraduationCap className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h2>M.S. in Data Science</h2>
                  <h3>
                    <a
                      href="https://www.tu-dortmund.de/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Technische Universität Dortmund
                    </a>
                  </h3>
                  <p className="timeline-date">April 2021 - March 2024</p>
                  <p className="education-details">
                    Specialized in Machine Learning and Artificial Intelligence
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="icon-container">
                  <FaGraduationCap className="timeline-icon" />
                </div>
                <div className="timeline-content">
                  <h2>B.Tech in Computer Science and Engineering</h2>
                  <h3>
                    <a
                      href="https://www.ssit.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sri Siddhartha Institute of Technology
                    </a>
                  </h3>
                  <p className="timeline-date">August 2014 - May 2018</p>
                  <p className="education-details">
                    Specialized in Computer Science and Engineering
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Skills />
        </div>
      </div>
    </>
  );
};

export default Experience;
