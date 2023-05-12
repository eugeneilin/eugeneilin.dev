import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';

const Home = () => {
  const subtitleRef = useRef(null);
  const locationRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const elements = [subtitleRef.current, locationRef.current, linksRef.current];
    let delay = 0;
    elements.forEach((element) => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 1s ease, transform 1s ease';
      element.style.transitionDelay = `${delay}s`;
      delay += 0.4;
    });
    setTimeout(() => {
      elements.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      });
    }, 100);
  }, []);

  return (
    <section id='home'>
      <div className='avatar'></div>
      <div className='title'>
        <h1>Eugene</h1>
        <h1 className='lastName'>Ilin</h1>
      </div>
      <h4 ref={subtitleRef}>
        Full Stack <span>Web Developer</span>
      </h4>
      <div className='py-1' ref={locationRef}>
        <p>
          I build full-stack websites and apps from <span>design</span> to <span>database</span> to{' '}
          <span>deployment</span>.
        </p>
        <p className='pt-1'>Charlotte, North Carolina</p>
      </div>
      <div className='py-1' ref={linksRef}>
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

export default Home;
