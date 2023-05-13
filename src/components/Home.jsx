import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';

const Home = () => {
  // Refs
  const subtitleRef = useRef(null);
  const locationRef = useRef(null);
  const linksRef = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [subtitleRef.current, locationRef.current, linksRef.current];
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
        <a href='https://github.com/eugeneilin' target='_blank' rel='noreferrer'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a href='https://www.linkedin.com/in/eugene-ilin/' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin-in fa-2x'></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
