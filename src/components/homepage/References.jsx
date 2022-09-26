import React from 'react';
import { ReferenceList } from '../../helpers/ReferenceList';
import ReferenceMenu from '../homepage/ReferenceMenu';
import Recommendation from '../homepage/Recommendation';
import '../../styles/homepage/References.css';

const References = () => {
  return (
    <section id='references'>
      <h2>References</h2>
      <div>
        <div className='references-container'>
          {ReferenceList.map((reference) => {
            return (
              <ReferenceMenu
                id={reference.id}
                name={reference.name}
                position={reference.position}
                image={reference.image}
                company={reference.company}
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default References;
