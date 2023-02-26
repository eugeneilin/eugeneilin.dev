import React from 'react';
import { EducationList } from '../../helpers/EducationList';
// import { ExperienceList } from '../../helpers/ExperienceList';
// import '../../styles/homepage/Education.css';

const Education = () => {
  const TrueCoders = EducationList.TrueCoders;
  let displayTrueCoders = TrueCoders.map((TrueCodersItem) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {TrueCodersItem}
      </p>
    );
  });

  const Certifications = EducationList.Certifications;
  let displayCertifications = Certifications.map((Certification) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {Certification}
      </p>
    );
  });

  return (
    <section id='education'>
      <h2>Education</h2>
      <div>
        <h4>
          <span>True Coders Bootcamp</span> Certificate of Completion
        </h4>
        <div>{displayTrueCoders}</div>
      </div>
      {/* <div className='pt-1'>
        <h4>
          Other <span>Certifications</span>
        </h4>
        <div>{displayCertifications}</div>
      </div> */}
      <p className='pt-1'>
        4+ years ago I began my journey as a self-taught developer, working on projects for people
        and studying diligently on top of my full-time jobs.
      </p>
      <p className='pt-1'>
        Throughout this period of time, my self-education took place on CodeCademy, Udemy, and
        YouTube. It also happened through many interactions with my developer friends, reviewing and
        commenting on my code, explaining best practices and guiding me to the best learning path.
        The necessary practice of Googling and researching the best solution has been an integral
        part of my growth.
      </p>
      <p className='pt-1'>
        Currently, I'm in bootcamp full-time until end of April, to solidify my knowledge and
        application of programming, as well as build a broader network of passionate developers.
      </p>
      <div className='icons-bottom'>
        <div className='education-icons truecoders'></div>
        <div className='education-icons udemy'></div>
        <div className='education-icons codecademy'></div>
        <div className='education-icons youtube'></div>
      </div>
    </section>
  );
};

export default Education;
