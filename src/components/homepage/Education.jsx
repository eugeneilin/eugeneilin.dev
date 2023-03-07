import React from 'react';
import { EducationList } from '../../helpers/EducationList';
import '../../styles/homepage/Education.css';

const Education = () => {
  const whatDoesSelfTaughtMean = EducationList.whatDoesSelfTaughtMean;
  let displayMeaningOfSelfTaught = whatDoesSelfTaughtMean.map((Meaning) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {Meaning}
      </p>
    );
  });

  return (
    <section id='education'>
      <h2>Education</h2>
      <div className='pt-1'>
        <h4>
          I am a <span>Self-Taught</span> Developer
        </h4>
        <p>
          Over 4 years ago, I began coding. I studied through Udemy, YouTube, and my mentors. Many
          lines of code later, I have not only the necessary technical skills to build full stack
          applications, but also resilience and dedication.
        </p>
      </div>
      <div className='pt-1'>
        <h4>
          What this <span>journey</span> has looked like for me
        </h4>
        <div>
          <div>{displayMeaningOfSelfTaught}</div>
        </div>
      </div>
      <div className='icons-bottom'>
        <div className='education-icons udemy'></div>
        <div className='education-icons youtube'></div>
      </div>
    </section>
  );
};

export default Education;
