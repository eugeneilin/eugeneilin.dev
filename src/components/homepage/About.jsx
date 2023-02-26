import React from 'react';
import '../../styles/homepage/About.css';

const About = () => {
  return (
    <section id='about'>
      <div className='title'>
        <h1>Eugene</h1>
        <h1 className='lastName'>Ilin</h1>
      </div>
      <h4>
        Full Stack <span>React</span> Developer
      </h4>
      <p className='pt-1'>
        Dynamic and creative web developer with 3+ years of experience building quality websites and
        applications. Excellent problem-solving skills and ability to perform well on a team. Adept
        at working in diverse environments and establishing rapport with various professionals from
        all levels and backgrounds.
      </p>
      <div className='pt-1'>
        <a href='https://github.com/eugeneilin' target='_blank'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a href='https://www.linkedin.com/in/eugene-ilin/' target='_blank'>
          <i className='fab fa-linkedin-in fa-2x'></i>
        </a>
      </div>
    </section>
  );
};

export default About;
