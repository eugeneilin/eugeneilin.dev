import React from 'react';
import { SkillList } from '../../helpers/SkillList';
import '../../styles/homepage/Skills.css';

const Skills = () => {
  const acumen = SkillList.acumen;
  let displayAcumen = acumen.map((skill) => {
    return <i className={skill}></i>;
  });

  const competencies = SkillList.competencies;
  let displayCompetencies = competencies.map((competency) => {
    return (
      <p className='competency'>
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
      <p className='value'>
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
      <div className='skill-set'>
        <h4>
          Acquired <span>technical acumen</span>:
        </h4>
        <div className='acumen'>{displayAcumen}</div>
      </div>
      <div className='skill-set'>
        <h4>
          Developed <span>core competencies</span>:
        </h4>
        <div>
          <div>{displayCompetencies}</div>
        </div>
      </div>
      <div className='skill-set'>
        <h4>
          Demonstrated <span>values</span> and <span>soft skills</span>:
        </h4>
        <div>
          <div>{displayValues}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
