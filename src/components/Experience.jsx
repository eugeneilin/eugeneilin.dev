import React, { useState, useEffect, useRef } from 'react';
import ExperienceItem from './ExperienceItem';
import { ExperienceList } from '../helpers/ExperienceList';
import '../styles//Experience.css';

const Experience = () => {
  // States
  const [filter, setFilter] = useState([]);

  // Refs
  const subtitleRef = useRef(null);
  const filterHeadingRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [
      subtitleRef.current,
      filterHeadingRef.current,
      filterRef.current,
      projectsRef.current,
    ];
    let delay = 0;
    refs.forEach((ref) => {
      ref.style.opacity = 0;
      ref.style.transform = 'translateY(20px)';
      ref.style.transition = 'opacity 1s ease, transform 1s ease';
      ref.style.transitionDelay = `${delay}s`;
      delay += 0.1;
    });
    const timeoutId = setTimeout(() => {
      refs.forEach((ref) => {
        ref.style.opacity = 1;
        ref.style.transform = 'translateY(0)';
      });
    });
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Get unique filters from helpers file
  const filters = ExperienceList.reduce((acc, project) => {
    project.tools.forEach((tool) => {
      if (!acc.includes(tool)) {
        acc.push(tool);
      }
    });
    return acc;
  }, []);

  // Handle clicks on filters
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value]);
    } else {
      setFilter(filter.filter((item) => item !== e.target.value));
    }
  };

  // Filter out projects based on filters selected
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
      <h4 ref={subtitleRef}>
        My <span>Projects</span>
      </h4>

      <p className='pt-1' ref={filterHeadingRef}>
        Filter by Technologies
      </p>
      <div id='project-filter' ref={filterRef}>
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

      <div className='projects' ref={projectsRef}>
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
