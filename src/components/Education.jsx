import React from 'react';
import { EducationDetails } from '../helpers/EducationDetails';
import '../styles/Education.css';

const Education = () => {
  const trueCodersInfo = EducationDetails.trueCoders;
  const udemyInfo = EducationDetails.udemy;
  const moreInfo = EducationDetails.more;
  const storyInfo = EducationDetails.myStory;

  const trueCodersDOM = trueCodersInfo.map((p) => {
    return <p className='pt-1'>{p}</p>;
  });

  const udemyCerts = udemyInfo.certs.map((li) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {li}
      </p>
    );
  });

  const moreCerts = moreInfo.certs.map((li) => {
    return (
      <p className='list-item'>
        <span>
          <i class='fa-solid fa-check'></i>
        </span>
        {li}
      </p>
    );
  });

  const myStory = storyInfo.map((p) => {
    return <p className='pt-1'>{p}</p>;
  });

  return (
    <section id='education'>
      <h2>Education</h2>
      <div id='education-details' className='pt-1'>
        <h4>
          <span>TrueCoders</span> Bootcamp
        </h4>
        <div className='pb-1'>{trueCodersDOM}</div>
        <h4 className='pt-1'>
          <span>Udemy</span> Courses
        </h4>
        <div className='pb-1'>{udemyInfo.p}</div>
        <div className='pb-1'>{udemyCerts}</div>
        <h4 className='pt-1'>
          <span>Additional</span> Courses
        </h4>
        <div className='pb-1'>{moreInfo.p}</div>
        <div className='pb-1'>{moreCerts}</div>
        <h4 className='pt-1'>
          My <span>Story</span>
        </h4>
        <div className='pb-1'>{myStory}</div>
      </div>
      <div className='icons-bottom'>
        <div className='education-icons truecoders'></div>
        <div className='education-icons udemy'></div>
      </div>
    </section>
  );
};

export default Education;
