import React, { useState } from 'react';
import ExperienceItem from '../homepage/ExperienceItem';
import { ExperienceList } from '../../helpers/ExperienceList';
import '../../styles/homepage/Experience.css';

const Experience = () => {
  const filters = ExperienceList.reduce((acc, project) => {
    project.tools.forEach((tool) => {
      if (!acc.includes(tool)) {
        acc.push(tool);
      }
    });
    return acc;
  }, []);

  const [filter, setFilter] = useState([]);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value]);
    } else {
      setFilter(filter.filter((item) => item !== e.target.value));
    }
  };

  const filteredProjects = ExperienceList.filter((project) => {
    if (filter.length === 0) {
      return true;
    } else {
      return filter.every((item) => project.tools.includes(item));
    }
  });

  return (
    <section id='experience'>
      <h2>Experience</h2>
      <h4>
        My <span>Projects</span>
      </h4>

      <p className='pt-1'>Filter by Technologies</p>
      <div id='project-filter'>
        {filters.map((filter, index) => (
          <div key={index}>
            <input
              type='checkbox'
              id={`filter-${index}`}
              value={filter}
              onChange={handleCheckbox}
            />
            <label htmlFor={`filter-${index}`}>{filter.split('-')[1]}</label>
          </div>
        ))}
      </div>

      <div className='projects'>
        {filteredProjects.map((project, index) => {
          return (
            <ExperienceItem
              key={index + 1 + `-${project.slug}`}
              highlight={project.highlight}
              name={project.name}
              image={project.image}
              slug={project.slug}
              tag={project.tag}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
