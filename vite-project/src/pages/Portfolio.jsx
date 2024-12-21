import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
      {
        title: 'Project 1',
        image: '/images/project1.png', // Replace with your image path
        link: 'https://live-demo-link.com',
        repo: 'https://github.com/username/project1',
      },
      {
        title: 'Project 2',
        image: '/images/project2.png', // Replace with your image path
        link: 'https://live-demo-link.com',
        repo: 'https://github.com/username/project2',
      },
      // Add more projects as needed
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
