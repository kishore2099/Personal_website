import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [currentBootLine, setCurrentBootLine] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const bootSequence = [
    'INITIATING CHIMERA_OS...',
    'LOADING NEURAL_CORE...',
    'MOUNTING AI_SUBSYSTEMS...',
    'CALIBRATING HARDWARE_INTERFACE...',
    'ESTABLISHING NETWORK_PROTOCOLS...',
    'RENDER_UI... DONE.',
    'WELCOME, OPERATOR.'
  ];

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      if (currentBootLine < bootSequence.length - 1) {
        setCurrentBootLine(currentBootLine + 1);
      } else {
        setTimeout(() => setBootComplete(true), 1000);
      }
    }, 400);

    return () => clearTimeout(bootTimer);
  }, [currentBootLine]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const BootScreen = () => (
    <div className="boot-screen">
      <div className="terminal-container">
        <div className="terminal-header">CHIMERA_OS v2.5.1</div>
        <div className="boot-text">
          {bootSequence.slice(0, currentBootLine + 1).map((line, index) => (
            <div key={index} className="boot-line">
              <span className="prompt">{'>'}</span> {line}
            </div>
          ))}
          <div className="cursor">_</div>
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-items">
          <button onClick={() => scrollToSection('boot')} className="nav-btn">[ BOOT ]</button>
          <button onClick={() => scrollToSection('profile')} className="nav-btn">[ PROFILE ]</button>
          <button onClick={() => scrollToSection('missions')} className="nav-btn">[ MISSIONS ]</button>
          <button onClick={() => scrollToSection('skill-tree')} className="nav-btn">[ SKILL_TREE ]</button>
          <button onClick={() => scrollToSection('contact')} className="nav-btn">[ CONTACT ]</button>
        </div>
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`sound-toggle ${soundEnabled ? 'enabled' : 'disabled'}`}
        >
          [ AUDIO: {soundEnabled ? 'ON' : 'OFF'} ]
        </button>
      </div>
      <div className="scroll-progress">
        <div className="progress-label">SYSTEM SCAN:</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${scrollProgress}%`}}></div>
        </div>
        <div className="progress-percent">{Math.round(scrollProgress)}%</div>
      </div>
    </nav>
  );

  const BootSection = () => (
    <section id="boot" className="section boot-section">
      <div className="content-window">
        <div className="window-header">BOOT_SEQUENCE.exe</div>
        <div className="window-content">
          <h1 className="main-title">Welcome, Operator.</h1>
          <h2 className="sub-title">My name is Kishore Narayanan.</h2>
          <p className="description">I build intelligent systems and bring hardware to life. Let's explore the possibilities.</p>
          <div className="central-visual">
            <div className="neural-network">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="connection"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('profile')} 
            className="cta-button"
          >
            {'>'} INITIATE EXPLORATION
          </button>
        </div>
      </div>
    </section>
  );

  const ProfileSection = () => (
    <section id="profile" className="section">
      <div className="content-window">
        <div className="window-header">PLAYER_PROFILE.dat</div>
        <div className="window-content">
          <h2 className="section-title">PLAYER PROFILE: Kishore Narayanan</h2>
          <div className="profile-layout">
            <div className="profile-bio">
              <h3 className="subsection-title">// BIO</h3>
              <p>A journey driven by curiosity and creation, spanning the realms of artificial intelligence, machine learning, and hardware innovation. From the vibrant tech landscape of Chennai to cutting-edge development projects, I transform ideas into intelligent systems that bridge the digital and physical worlds.</p>
            </div>
            <div className="profile-stats">
              <h3 className="subsection-title">// STATS</h3>
              <div className="stat-item">
                <span className="stat-label">Origin:</span>
                <span className="stat-value">Chennai, Tamil Nadu, India</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Class:</span>
                <span className="stat-value">AI/ML Engineer & Hardware Tinkerer</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Primary Skills:</span>
                <span className="stat-value">Python, PyTorch, C++</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Tools of Choice:</span>
                <span className="stat-value">Blender, Raspberry Pi, ESP32, Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const MissionsSection = () => {
    const missions = [
      {
        name: "BNO055 Sensor Integration & Robotics",
        objective: "Precise motion control using Adafruit BNO055 9-DOF sensors and QT Py microcontrollers",
        status: "COMPLETED",
        details: "Developed a sophisticated robotics control system leveraging the BNO055's fusion algorithms for accurate orientation tracking. Utilized QT Py microcontrollers for compact, efficient processing and Dupont connectors for reliable prototyping connections.",
        techStack: ["Adafruit BNO055", "QT Py", "Python", "I2C Protocol", "Sensor Fusion"],
        images: ["sensor-setup.jpg", "robot-prototype.jpg"]
      },
      {
        name: "IoT Patent Development", 
        objective: "System design with Arduino and ESP32 microcontrollers for patent documentation",
        status: "COMPLETED",
        details: "Architected and documented a comprehensive IoT system for patent filing. Created detailed flowcharts and CAD visuals to illustrate system architecture, data flow, and hardware integration. The project required meticulous documentation standards for intellectual property protection.",
        techStack: ["Arduino", "ESP32", "CAD Design", "System Architecture", "Patent Documentation"],
        images: ["flowchart.jpg", "cad-design.jpg"]
      },
      {
        name: "Interactive 3D Model Viewer",
        objective: "Web-based interactive viewer for custom 3D assets with accurate visual representation", 
        status: "COMPLETED",
        details: "Developed a responsive web application for showcasing 3D models created in Blender. Focused on maintaining visual fidelity while optimizing performance for web deployment. Implemented interactive controls for model rotation, zoom, and lighting adjustments.",
        techStack: ["Blender", "Three.js", "WebGL", "JavaScript", "3D Optimization"],
        images: ["3d-viewer.jpg", "blender-model.jpg"]
      }
    ];

    const [selectedMission, setSelectedMission] = useState(null);

    return (
      <section id="missions" className="section">
        <div className="content-window">
          <div className="window-header">MISSION_LOGS.archive</div>
          <div className="window-content">
            <h2 className="section-title">MISSION LOGS: PROJECT ARCHIVES</h2>
            <div className="missions-grid">
              {missions.map((mission, index) => (
                <div key={index} className="mission-card" onClick={() => setSelectedMission(mission)}>
                  <div className="mission-header">
                    <div className="mission-name">MISSION_{String(index + 1).padStart(2, '0')}: {mission.name}</div>
                    <div className={`mission-status ${mission.status.toLowerCase()}`}>{mission.status}</div>
                  </div>
                  <div className="mission-objective">OBJECTIVE: {mission.objective}</div>
                  <div className="mission-cta">{'>'} OPEN MISSION FILE</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {selectedMission && (
          <div className="modal-overlay" onClick={() => setSelectedMission(null)}>
            <div className="mission-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <span>MISSION_DETAILS.log</span>
                <button onClick={() => setSelectedMission(null)} className="close-btn">X</button>
              </div>
              <div className="modal-content">
                <h3>{selectedMission.name}</h3>
                <div className="mission-detail-section">
                  <h4>// DETAILED BRIEFING</h4>
                  <p>{selectedMission.details}</p>
                </div>
                <div className="mission-detail-section">
                  <h4>// TECH STACK UTILIZED</h4>
                  <div className="tech-tags">
                    {selectedMission.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <button className="github-link">{'>'} ACCESS SOURCE CODE</button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  const SkillTreeSection = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    
    const skillNodes = {
      ml: {
        name: "MACHINE LEARNING",
        position: { x: 200, y: 150 },
        children: [
          { name: "Neural Networks", position: { x: 100, y: 250 }, description: "Deep learning architectures and training optimization" },
          { name: "Data Analysis", position: { x: 200, y: 280 }, description: "Statistical analysis and data preprocessing pipelines" },
          { name: "Computer Vision", position: { x: 300, y: 250 }, description: "Image processing and visual recognition systems" }
        ]
      },
      hardware: {
        name: "HARDWARE PROTOTYPING", 
        position: { x: 500, y: 150 },
        children: [
          { name: "Microcontrollers", position: { x: 400, y: 250 }, description: "ESP32, Arduino, QT Py development and integration" },
          { name: "Sensor Integration", position: { x: 500, y: 280 }, description: "BNO055, IMU, and environmental sensor systems" },
          { name: "PCB Design", position: { x: 600, y: 250 }, description: "Circuit design and PCB layout optimization" }
        ]
      },
      creative: {
        name: "CREATIVE DEVELOPMENT",
        position: { x: 800, y: 150 },
        children: [
          { name: "3D Modeling", position: { x: 700, y: 250 }, description: "Blender modeling, texturing, and animation" },
          { name: "Game Design", position: { x: 800, y: 280 }, description: "Interactive experience and UI/UX principles" },
          { name: "Web Technologies", position: { x: 900, y: 250 }, description: "React, Three.js, and modern web frameworks" }
        ]
      }
    };

    return (
      <section id="skill-tree" className="section">
        <div className="content-window full-height">
          <div className="window-header">SKILL_TREE.sys</div>
          <div className="window-content">
            <h2 className="section-title">SKILL_TREE: UNLOCKABLE ABILITIES</h2>
            <div className="skill-tree-container">
              <svg className="skill-tree-svg" viewBox="0 0 1000 400">
                {/* Connection lines */}
                {Object.values(skillNodes).map((branch, branchIndex) => 
                  branch.children.map((child, childIndex) => (
                    <line
                      key={`${branchIndex}-${childIndex}`}
                      x1={branch.position.x}
                      y1={branch.position.y}
                      x2={child.position.x}
                      y2={child.position.y}
                      className="skill-connection"
                    />
                  ))
                )}
                
                {/* Main skill nodes */}
                {Object.values(skillNodes).map((branch, index) => (
                  <g key={index}>
                    <circle
                      cx={branch.position.x}
                      cy={branch.position.y}
                      r="30"
                      className="skill-node main-node"
                      onMouseEnter={() => setHoveredSkill(branch)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    />
                    <text
                      x={branch.position.x}
                      y={branch.position.y - 45}
                      className="skill-label main-label"
                      textAnchor="middle"
                    >
                      {branch.name}
                    </text>
                  </g>
                ))}
                
                {/* Child skill nodes */}
                {Object.values(skillNodes).map((branch, branchIndex) =>
                  branch.children.map((child, childIndex) => (
                    <g key={`child-${branchIndex}-${childIndex}`}>
                      <circle
                        cx={child.position.x}
                        cy={child.position.y}
                        r="20"
                        className="skill-node child-node"
                        onMouseEnter={() => setHoveredSkill(child)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      />
                      <text
                        x={child.position.x}
                        y={child.position.y - 30}
                        className="skill-label child-label"
                        textAnchor="middle"
                      >
                        {child.name}
                      </text>
                    </g>
                  ))
                )}
              </svg>
              
              {hoveredSkill && (
                <div className="skill-tooltip">
                  <h4>{hoveredSkill.name}</h4>
                  <p>{hoveredSkill.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    const [formData, setFormData] = useState({
      callsign: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Transmission sent:', formData);
      alert('TRANSMISSION SENT SUCCESSFULLY');
    };

    return (
      <section id="contact" className="section">
        <div className="content-window">
          <div className="window-header">COMMS_LINK.active</div>
          <div className="window-content">
            <h2 className="section-title">COMMS_LINK: ESTABLISH CONTACT</h2>
            <p className="contact-subtitle">// Transmit a secure message. Encryption active.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Callsign (Name):</label>
                <input
                  type="text"
                  value={formData.callsign}
                  onChange={(e) => setFormData({...formData, callsign: e.target.value})}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Message Subject:</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Your Message:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">
                {'>'} SEND TRANSMISSION
              </button>
            </form>
            
            <div className="social-links">
              <h3>// EXTERNAL NETWORK RELAYS</h3>
              <div className="social-buttons">
                <a href="#" className="social-btn">LINKEDIN_RELAY</a>
                <a href="#" className="social-btn">GITHUB_REPOSITORY</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CommandLine = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState([]);

    const handleCommand = (cmd) => {
      const commands = {
        'help': 'Available commands: help, goto:missions, goto:profile, goto:skill-tree, goto:contact, clear, easter_egg',
        'goto:missions': 'Navigating to MISSIONS...',
        'goto:profile': 'Navigating to PROFILE...',
        'goto:skill-tree': 'Navigating to SKILL_TREE...',
        'goto:contact': 'Navigating to CONTACT...',
        'clear': 'CLEAR_COMMAND',
        'easter_egg': '🚀 The future is built by those who dare to dream in code. Keep building, operator! 🚀'
      };

      if (cmd.startsWith('goto:')) {
        const section = cmd.split(':')[1];
        if (section === 'skill-tree') {
          scrollToSection('skill-tree');
        } else {
          scrollToSection(section);
        }
      }

      const response = commands[cmd] || `Command not recognized: ${cmd}`;
      
      if (response === 'CLEAR_COMMAND') {
        setOutput([]);
      } else {
        setOutput(prev => [...prev, `> ${cmd}`, response]);
      }
      setCommand('');
    };

    if (!isOpen) {
      return (
        <div className="command-trigger" onClick={() => setIsOpen(true)}>
          _
        </div>
      );
    }

    return (
      <div className="command-line">
        <div className="command-output">
          {output.map((line, i) => (
            <div key={i} className="command-line-text">{line}</div>
          ))}
        </div>
        <div className="command-input-line">
          <span>{'>'}</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCommand(command)}
            className="command-input"
            autoFocus
          />
        </div>
        <button onClick={() => setIsOpen(false)} className="command-close">×</button>
      </div>
    );
  };

  if (!bootComplete) {
    return <BootScreen />;
  }

  return (
    <div className="app">
      <div className="scanlines"></div>
      <Navigation />
      <main>
        <BootSection />
        <ProfileSection />
        <MissionsSection />
        <SkillTreeSection />
        <ContactSection />
      </main>
      <CommandLine />
    </div>
  );
};

export default App;