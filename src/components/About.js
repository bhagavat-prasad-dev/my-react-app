import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'INFOTECH',
      period: 'june 2025',
      
      description: 'Led development of scalable web applications using React and Node.js.'
    },
    {
      title: 'Frontend Developer',
      
      description: 'Built responsive user interfaces and improved user experience.'
    },
    {
      title: 'Junior Developer',
      
      description: 'Developed websites and web applications using modern technologies.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer with 5+ years of experience creating digital solutions
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With 5+ years of experience 
              in web development, I've worked on a variety of projects from small business 
              websites to complex web applications.
            </p>
            <p>
              My expertise lies in modern JavaScript frameworks like React and Node.js, 
              and I'm always eager to learn new technologies. I believe in writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
            
            <div className="stats">
              <div className="stat">
                <h4>fresher</h4>
                <p>new employee</p>
              </div>
              <div className="stat">
                <h4>portfolio</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>.</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="experience-section">
          <h3>Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 