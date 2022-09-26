import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExperienceList } from '../helpers/ExperienceList';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ExperienceList[id];

  let toolList = project.tools.map((index) => {
    return <i className={index}></i>;
  });

  return (
    <section className='project'>
      <div className='project-img' style={{ backgroundImage: `url(${project.image})` }}></div>
      <div className='project-content'>
        <h3>{project.name}</h3>
        <div className='links'>
          <div className='link'>
            <Link to={{ pathname: project.code }} target='_blank'>
              <i className='devicon-github-original devicon'></i>
              <h5>View Code</h5>
            </Link>
          </div>
          <div className='link'>
            <Link to={{ pathname: project.demo }} target='_blank'>
              <i className='fa-solid fa-play fa-2x'></i>
              <h5>View Demo</h5>
            </Link>
          </div>
        </div>
        <div className='info'>
          <h4>Overview:</h4>
          <p>{project.overview}</p>
        </div>
        <div className='info'>
          <h4>Highlights:</h4>
          <p>{project.highlights}</p>
        </div>
        <div className='tools'>{toolList}</div>
      </div>
    </section>
  );
};

export default ProjectDisplay;
