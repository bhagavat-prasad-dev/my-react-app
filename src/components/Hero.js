import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Bhagavat Prasad</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developerner
            </h2>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span > BH </span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Bhagavat Prasad</h3>
                <p>Full Stack Developer</p>
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Python</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 