import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';
const Portfolio = () => {
    const projects = [
      {
        title: 'Sleep Tracker',
        image: 'https://raw.githubusercontent.com/ivandamian1/Project-1/refs/heads/main/assets/SiteView.png', 
        link: 'https://ivandamian1.github.io/Project-1/',
        repo: 'https://github.com/ivandamian1/Project-1',
      },
      {
        title: 'Marketing website',
        image: 'https://camo.githubusercontent.com/2f67e63b32aff5fffa6742b564ef8a7f71e54d9666c84dbd34fd1d110f3d6ad3/68747470733a2f2f7374617469632e62632d6564782e636f6d2f636f64696e672f736f6674776172652d6465762f30312d48544d4c2d4769742d4353532f6173736574732f30312d68746d6c2d6373732d6769742d686f6d65776f726b2d64656d6f2e706e67', // Replace with your image path
        link: 'https://ivandamian1.github.io/challenge-week-1-ivan/',
        repo: 'https://github.com/ivandamian1/challenge-week-1-ivan',
      },
      {
        title: 'Pre-Work Study Guide',
        image: 'https://raw.githubusercontent.com/ivandamian1/Prework-study-guide/refs/heads/main/assets/Screen%20Shot%202024-12-21%20at%202.24.33%20PM.png', 
        link: 'https://ivandamian1.github.io/Prework-study-guide/',
        repo: 'https://github.com/ivandamian1/Prework-study-guide',
      },
      {
        title: 'Employee Tracker',
        image: 'https://raw.githubusercontent.com/ivandamian1/EmployeeTracker/refs/heads/main/Screen%20Shot%202024-12-21%20at%202.31.04%20PM.png', 
        link: 'https://drive.google.com/file/d/1E0dSODlMpBzv9f5alPy3gz_ZGRb5qv-n/view',
        repo: 'https://github.com/ivandamian1/EmployeeTracker',
      },
      {
        title: 'Professional ReadMe Generator',
        image: 'https://raw.githubusercontent.com/ivandamian1/NodeJs-Challenge/refs/heads/main/Screen%20Shot%202024-12-21%20at%202.34.44%20PM.png', 
        link: 'https://drive.google.com/file/d/1USmZG25-gV5Zirwo8uPNqEVOS4UE6hj_/view',
        repo: 'https://github.com/ivandamian1/NodeJs-Challenge',
      },
      {
        title: 'Vehicle OOP Application',
        image: 'https://raw.githubusercontent.com/ivandamian1/Challenge-8/refs/heads/main/Screen%20Shot%202024-12-21%20at%202.47.32%20PM.png', // Replace with your image path
        link: 'https://live-demo-link.comhttps://drive.google.com/file/d/1qfhXtTJzf-tDGvJh5aUV-GCF5uoLG92K/view',
        repo: 'https://github.com/ivandamian1/Challenge-8',
      },
    ];

    return (
        <section>
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                image={project.image}
                link={project.link}
                repo={project.repo}
              />
            ))}
          </div>
        </section>
      );
    };

export default Portfolio;
