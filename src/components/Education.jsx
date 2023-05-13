import React, { useRef, useEffect } from 'react';
import { EducationDetails } from '../helpers/EducationDetails';
import '../styles/Education.css';

const Education = () => {
  // Refs
  const bootcampRef = useRef(null);
  const udemyRef = useRef(null);
  const coursesRef = useRef(null);
  const storyRef = useRef(null);
  const iconsRef = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [
      bootcampRef.current,
      udemyRef.current,
      coursesRef.current,
      storyRef.current,
      iconsRef.current,
    ];
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
        <div ref={bootcampRef}>
          <h4>
            <span>TrueCoders</span> Bootcamp
          </h4>
          <div className='pb-1'>{trueCodersDOM}</div>
        </div>
        <div ref={udemyRef}>
          <h4 className='pt-1'>
            <span>Udemy</span> Courses
          </h4>
          <div className='pb-1'>{udemyInfo.p}</div>
          <div className='pb-1'>{udemyCerts}</div>
        </div>
        <div ref={coursesRef}>
          <h4 className='pt-1'>
            <span>Additional</span> Courses
          </h4>
          <div className='pb-1'>{moreInfo.p}</div>
          <div className='pb-1'>{moreCerts}</div>
        </div>
        <div ref={storyRef}>
          <h4 className='pt-1'>
            My <span>Story</span>
          </h4>
          <div className='pb-1'>{myStory}</div>
        </div>
      </div>
      <div className='icons-bottom' ref={iconsRef}>
        <div className='education-icons truecoders'></div>
        <div className='education-icons udemy'></div>
      </div>
    </section>
  );
};

export default Education;
