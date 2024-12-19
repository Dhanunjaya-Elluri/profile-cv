import React from "react";
import { FaPython, FaDocker, FaGitAlt, FaAws, FaLinux } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiGithubactions,
  SiApachekafka,
  SiApacheairflow,
  SiDatabricks,
  SiMlflow,
  SiTerraform,
  SiR,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & ML",
      skills: [
        { name: "PYTHON", icon: FaPython, level: "95%" },
        { name: "R", icon: SiR, level: "85%" },
        { name: "C/C++", icon: SiCplusplus, level: "80%" },
        { name: "PYTORCH", icon: SiPytorch, level: "90%" },
        { name: "TENSORFLOW", icon: SiTensorflow, level: "85%" },
        { name: "SCIKIT-LEARN", icon: SiScikitlearn, level: "90%" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", icon: FaAws, level: "85%" },
        { name: "AZURE", icon: VscAzure, level: "85%" },
        { name: "DOCKER", icon: FaDocker, level: "90%" },
        { name: "KUBERNETES", icon: SiKubernetes, level: "80%" },
        { name: "TERRAFORM", icon: SiTerraform, level: "75%" },
        { name: "LINUX", icon: FaLinux, level: "85%" },
      ],
    },
    {
      category: "MLOps & CI/CD",
      skills: [
        { name: "GIT", icon: FaGitAlt, level: "95%" },
        { name: "GITHUB ACTIONS", icon: SiGithubactions, level: "85%" },
        { name: "MLFLOW", icon: SiMlflow, level: "85%" },
        { name: "DATABRICKS", icon: SiDatabricks, level: "80%" },
      ],
    },
    {
      category: "Data & Databases",
      skills: [
        { name: "MYSQL", icon: SiMysql, level: "85%" },
        { name: "MONGODB", icon: SiMongodb, level: "80%" },
        { name: "KAFKA", icon: SiApachekafka, level: "75%" },
        { name: "AIRFLOW", icon: SiApacheairflow, level: "80%" },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h1>Technical Skills</h1>
      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h2>{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
