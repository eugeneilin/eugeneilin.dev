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
        <p className='pt-1'>
          More than four years ago, I embarked on a journey to become a full stack web developer,
          with the help of Udemy, YouTube, and the guidance of my mentors. Through countless hours
          of studying and writing code, I have not only acquired the technical skills required to
          build complex applications, but also developed a deep sense of resilience and dedication.
        </p>
        <p className='pt-1'>
          Over the course of my journey, I faced numerous challenges, from debugging complex code to
          managing project timelines and communication with clients. However, through perseverance
          and a passion for the craft, I was able to overcome any obstacles and push myself to
          become a skilled and confident developer.
        </p>
        <p className='pt-1'>
          What sets me apart from others in the field is my ability to learn and adapt quickly,
          whether it is through attending coding meetups or reading up on the latest industry trends
          and best practices. I am committed to continuously improving my skills and knowledge
          through online courses and tutorials.
        </p>
        <p className='pt-1'>
          Beyond my technical skills, my journey as a self-taught developer has taught me the value
          of collaboration and mentorship. I am always eager to learn from others and share my own
          experiences with aspiring developers.
        </p>
        <p className='pt-1'>
          Overall, I am grateful for the opportunity to pursue my passion for web development and
          look forward to continuing to grow and learn in this dynamic and exciting field.
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
