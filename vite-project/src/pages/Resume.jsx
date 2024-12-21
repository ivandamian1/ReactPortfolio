import React from 'react';
import './Resume.css'; 
import myResume from '../assets/2024 Resume - Iván Adrover.pdf';

const Resume = () => {
  const proficiencies = [
    'HTML & CSS',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express.js',
    'SQL',
    'Git & GitHub',
    'Responsive Design',
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume to learn more about my experience and projects:
      </p>
      <a
        href={myResume} // Replace with your actual resume file path
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download"
      >
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul className="proficiency-list">
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
