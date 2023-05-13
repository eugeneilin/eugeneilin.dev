import React, { useEffect, useRef } from 'react';
import { SkillList } from '../helpers/SkillList';
import '../styles/Skills.css';

const Skills = () => {
  // Refs
  const acumenRef = useRef(null);
  const competenciesRef = useRef(null);
  const skillsRef = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [acumenRef.current, competenciesRef.current, skillsRef.current];
    let delay = 0;
    refs.forEach((ref) => {
      ref.style.opacity = 0;
      ref.style.transform = 'translateY(20px)';
      ref.style.transition = 'opacity 1s ease, transform 1s ease';
      ref.style.transitionDelay = `${delay}s`;
      delay += 0.3;
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

  const acumen = SkillList.acumen;
  let displayAcumen = acumen.map((skill) => {
    return (
      <i className={skill}>
        <p>{skill.split('-')[1]}</p>
      </i>
    );
  });

  const competencies = SkillList.competencies;
  let displayCompetencies = competencies.map((competency) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {competency}
      </p>
    );
  });

  const values = SkillList.values;
  let displayValues = values.map((value) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {value}
      </p>
    );
  });

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div ref={acumenRef}>
        <h4>
          Acquired <span>technical acumen</span>:
        </h4>
        <div className='acumen'>{displayAcumen}</div>
      </div>
      <div className='py-1' ref={competenciesRef}>
        <h4>
          Developed <span>core competencies</span>:
        </h4>
        <div>{displayCompetencies}</div>
      </div>
      <div className='py-1' ref={skillsRef}>
        <h4>
          Demonstrated <span>values</span> and <span>soft skills</span>:
        </h4>
        <div>{displayValues}</div>
      </div>
    </section>
  );
};

export default Skills;
