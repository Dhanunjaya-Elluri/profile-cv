import React from "react";
import { FaPython, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiMongodb,
  SiKubernetes,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "PYTHON", icon: FaPython, level: "95%" },
    { name: "PYTORCH", icon: SiPytorch, level: "90%" },
    { name: "TENSORFLOW", icon: SiTensorflow, level: "85%" },
    { name: "SCIKIT-LEARN", icon: SiScikitlearn, level: "90%" },
    { name: "DOCKER", icon: FaDocker, level: "85%" },
    { name: "KUBERNETES", icon: SiKubernetes, level: "80%" },
    { name: "AWS", icon: FaAws, level: "85%" },
    { name: "AZURE", icon: VscAzure, level: "80%" },
    { name: "GIT", icon: FaGitAlt, level: "90%" },
    { name: "MYSQL", icon: SiMysql, level: "85%" },
    { name: "MONGODB", icon: SiMongodb, level: "80%" },
  ];

  return (
    <section className="skills-section">
      <h1>Technical Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <skill.icon className="skill-icon" />
              <span>{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{
                  width: skill.level,
                  backgroundColor: "#4FD1C5",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
