import React, { useEffect, useRef } from 'react';
import { ReferenceList } from '../helpers/ReferenceList';
import ReferenceMenu from './ReferenceMenu';
import Recommendation from './Recommendation';
import '../styles/References.css';

const References = () => {
  // Refs
  const subHeadingRef = useRef(null);
  const namesRef = useRef(null);

  // Fade in elements one by one
  useEffect(() => {
    const refs = [subHeadingRef.current, namesRef.current];
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
    <section id='references'>
      <h2>References</h2>
      <h4 ref={subHeadingRef}>
        Word of <span>recommendation</span>
      </h4>
      <div className='py-1' ref={namesRef}>
        <div className='references-container'>
          {ReferenceList.map((reference) => {
            return (
              <ReferenceMenu
                id={reference.id}
                name={reference.name}
                position={reference.position}
                image={reference.image}
                company={reference.company}
                defaultChecked={reference.defaultChecked} // fix
              />
            );
          })}
        </div>
        <div className='line'></div>
        <div>
          {ReferenceList.map((reference) => {
            return (
              <Recommendation
                id={reference.id}
                name={reference.name}
                position={reference.position}
                company={reference.company}
                recommendation={reference.recommendation}
                contactUrl={reference.contactUrl}
                companyUrl={reference.companyUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default References;
