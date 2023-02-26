import React from 'react';
import ExperienceItem from '../homepage/ExperienceItem';
import { ExperienceList } from '../../helpers/ExperienceList';
import '../../styles/homepage/Experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <h4>
        Samples of <span>what I do</span>
      </h4>
      <div className='projects'>
        {ExperienceList.map((project, index) => {
          return (
            <ExperienceItem
              id={index}
              highlight={project.highlight}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
