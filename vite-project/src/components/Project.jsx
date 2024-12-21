import React from 'react';
import PropTypes from 'prop-types';
import './Project.css'; 

const Project = ({ title, image, link, repo }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Live Demo
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Project;
