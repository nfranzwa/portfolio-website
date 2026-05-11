import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTools, FaCode } from 'react-icons/fa';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Oscillating Pump',
    category: 'Hardware & Software',
    description: 'A comprehensive electromechanical project integrating Arduino and ESP32 control systems, custom KiCad PCB designs, and a dedicated web application for monitoring and control.',
    tech: ['C++', 'ESP32', 'KiCad', 'React', 'MATLAB'],
    github: 'https://github.com/nfran/OscillatingPump',
    icon: <FaTools />
  },
  {
    id: 2,
    title: '6 DOF Robotic Arm',
    category: 'Robotics',
    description: 'A 6 degrees of freedom robotic arm designed with custom CAD, simulated using MATLAB URDF, and controlled via custom hardware and software stacks.',
    tech: ['SolidWorks', 'MATLAB', 'C++', 'Control Theory'],
    github: 'https://github.com/nfran/Engineering-Portfolio/tree/main/6%20DOF%20Robotic%20Arm',
    icon: <FaTools />
  },
  {
    id: 3,
    title: 'Algorithmic Trading System',
    category: 'Software Engineering',
    description: 'Data extraction pipelines and backtesting frameworks to parse alternative datasets (like Congressional trades) and evaluate quantitative trading strategies.',
    tech: ['Python', 'Pandas', 'Parquet', 'Data Engineering'],
    github: 'https://github.com/nfran/StockData',
    icon: <FaCode />
  },
  {
    id: 4,
    title: 'Custom Electric Skateboard',
    category: 'Mechanical Engineering',
    description: 'End-to-end design and assembly of an electric skateboard, featuring custom mounts, high-power battery management, and custom motor controllers.',
    tech: ['CAD', 'Machining', 'Electronics', 'Battery Systems'],
    github: 'https://github.com/nfran/Engineering-Portfolio/tree/main/Custom%20Electric%20Skateboard',
    icon: <FaTools />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card glass animate-fade-in-up delay-${(index % 3 + 1) * 100}`}
            >
              <div className="project-header flex justify-between items-center">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <ul className="project-tech flex flex-wrap gap-4">
                {project.tech.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
