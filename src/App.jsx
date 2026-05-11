import React, { useState } from 'react';
import { FaLinkedinIn, FaEnvelope, FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './App.css';

const projectData = [
  {
    id: 'pump',
    title: 'Oscillating Pump',
    image: 'pump.png',
    position: { top: '15%', left: '15%', rotate: '-8deg' },
    description: 'A comprehensive electromechanical project integrating Arduino and ESP32 control systems, custom KiCad PCB designs, and a dedicated web application for monitoring and control.',
    github: 'https://github.com/nfran/OscillatingPump',
    tech: ['C++', 'ESP32', 'KiCad', 'React', 'MATLAB']
  },
  {
    id: 'robot',
    title: '6 DOF Robotic Arm',
    image: 'robot.png',
    position: { top: '65%', left: '12%', rotate: '5deg' },
    description: 'A 6 degrees of freedom robotic arm designed with custom CAD, simulated using MATLAB URDF, and controlled via custom hardware and software stacks.',
    github: 'https://github.com/nfran/Engineering-Portfolio/tree/main/6%20DOF%20Robotic%20Arm',
    tech: ['SolidWorks', 'MATLAB', 'C++', 'Control Theory']
  },
  {
    id: 'skateboard',
    title: 'Custom Electric Skateboard',
    image: 'skateboard.png',
    position: { top: '65%', right: '12%', rotate: '-5deg' },
    description: 'End-to-end design and assembly of an electric skateboard, featuring custom mounts, high-power battery management, and custom motor controllers.',
    github: 'https://github.com/nfran/Engineering-Portfolio/tree/main/Custom%20Electric%20Skateboard',
    tech: ['CAD', 'Machining', 'Electronics', 'Battery Systems']
  },
  {
    id: 'trading',
    title: 'Algorithmic Trading System',
    image: 'trading.png',
    position: { top: '12%', right: '18%', rotate: '6deg' },
    description: 'Data extraction pipelines and backtesting frameworks to parse alternative datasets and evaluate quantitative trading strategies.',
    github: 'https://github.com/nfran/StockData',
    tech: ['Python', 'Pandas', 'Parquet', 'Data Engineering']
  }
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [titleText, setTitleText] = useState("");
  const fullTitle = "Nicholas Franzwa";

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="collage-container">
      {/* Background Grid */}
      <div className="grid-overlay"></div>

      {/* Center Title */}
      <div className="center-title-container">
        <h1 className="main-title">
          {titleText}
          <span className="typewriter-cursor">|</span>
        </h1>
        <div className="title-accent"></div>
        <div className="pushpins">
          <div className="pin pin-1"></div>
          <div className="pin pin-2"></div>
        </div>
      </div>

      {/* Post-it Note */}
      <div className="post-it">
        <span>professional<br/>project juggler</span>
      </div>

      {/* Project Polaroids */}
      {projectData.map((project) => (
        <div
          key={project.id}
          className="polaroid"
          style={{
            top: project.position.top,
            left: project.position.left,
            right: project.position.right,
            transform: `rotate(${project.position.rotate})`
          }}
          onClick={() => setActiveProject(project)}
        >
          <div className="polaroid-image" style={{ backgroundImage: `url(${project.image})` }}></div>
          <div className="polaroid-caption">{project.title}</div>
        </div>
      ))}

      {/* Social Icons bottom center */}
      <div className="social-dock">
        <a href="https://linkedin.com/in/nicholas-franzwa" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
        <a href="mailto:nicholas.franzwa@example.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="https://github.com/nfran" target="_blank" rel="noreferrer" className="social-icon">
          <FaGithub />
        </a>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveProject(null)}><FaTimes /></button>
            <div className="modal-image" style={{ backgroundImage: `url(${activeProject.image})` }}></div>
            <div className="modal-info">
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className="modal-tech">
                {activeProject.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href={activeProject.github} target="_blank" rel="noreferrer" className="modal-link">
                <FaExternalLinkAlt /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
