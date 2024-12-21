import React from 'react';
import './AboutMe.css'; 
import LinkedInPic from '../assets/LinkedInPic.jpeg';


const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img
          src= {LinkedInPic}
          alt="Ivan D. Adrover Rivera"
          className="about-me-image"
        />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm Ivan D. Adrover Rivera, a software development student with experience in building 
            responsive and dynamic single-page applications using React. I thrive on creating 
            elegant, user-friendly designs and solving challenging problems. When I'm not coding, 
            you'll find me traveling to new countries, working out, or enjoying a good movie.
          </p>
          <p>
            Let's connect and collaborate to bring innovative ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
