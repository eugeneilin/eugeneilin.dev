import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExperienceList } from '../helpers/ExperienceList';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { slug } = useParams();
  const project = ExperienceList.find((p) => p.slug === slug);

  let displayHighlights = project.highlights.map((highlight) => {
    return (
      <div>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {highlight}
      </div>
    );
  });

  let toolList = project.tools.map((index) => {
    return (
      <i className={index}>
        <p>{index.split('-')[1]}</p>
      </i>
    );
  });

  return (
    <section className='project'>
      <div className='project-img' style={{ backgroundImage: `url(${project.image})` }}></div>
      <div className='project-content'>
        <h3>{project.name}</h3>
        <p className='py-1'>{project.subtitle}</p>
        <div className='links'>
          <div className='link'>
            <Link to='/#experience' smooth>
              <i class='fa-solid fa-chevron-left fa-2x'></i>
              <h5>Go Back</h5>
              {/* Look at last position of page, and go there instead of reloading the entire Home
              component when "Go Back" is clicked */}
            </Link>
          </div>
          <div className='link'>
            <a href={project.code} rel='noreferrer' target='_blank'>
              <i class='fa-solid fa-code fa-2x'></i> <h5>View Code</h5>
            </a>
          </div>
          <div className='link'>
            <a href={project.demo} rel='noreferrer' target='_blank'>
              <i class='fa-solid fa-chevron-right fa-2x'></i> <h5>View Demo</h5>
            </a>
          </div>
        </div>
        <div className='info'>
          <h4>Overview:</h4>
          <p>{project.overview}</p>
        </div>
        <div className='info'>
          <h4>Technical Highlights:</h4>
          {displayHighlights}
        </div>
        <div className='icons-bottom'>{toolList}</div>
      </div>
    </section>
  );
};

export default ProjectDisplay;
