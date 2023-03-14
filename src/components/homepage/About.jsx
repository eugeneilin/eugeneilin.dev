import React from 'react';
import '../../styles/homepage/About.css';

const About = () => {
  return (
    <section id='about'>
      <div className='avatar'></div>
      <div className='title'>
        <h1>Eugene</h1>
        <h1 className='lastName'>Ilin</h1>
      </div>
      <h4>
        <span>Full Stack</span> Web Developer
      </h4>
      <div className='py-1'>
        <p>I build full-stack websites and apps from design to database to deployment.</p>
        <p className='pt-1'>Charlotte, North Carolina</p>
      </div>
      <div className='py-1'>
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
