import React from 'react';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';
import Skills from './Skills';
import resumePDF from './resume/Dhanunjaya_CV_DE.pdf';

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
                    <li>Working on fixing LLMs to make them compliant with EU AI Act</li>
                    <li>Developing and implementing AI safety measures</li>
                    <li>Collaborating with cross-functional teams to ensure AI compliance</li>
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
                    <li>Led machine learning projects from conception to deployment</li>
                    <li>Developed predictive models for business optimization</li>
                    <li>Collaborated with stakeholders to define project requirements</li>
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
                    <li>Developed predictive models for business optimization</li>
                    <li>Collaborated with stakeholders to define project requirements</li>
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
                    <li>Developed predictive models for business optimization</li>
                    <li>Collaborated with stakeholders to define project requirements</li>
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
                  <h2>M.S. in Computer Science</h2>
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