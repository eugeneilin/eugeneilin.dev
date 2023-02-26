import React from 'react';
import { ReferenceList } from '../../helpers/ReferenceList';
import ReferenceMenu from '../homepage/ReferenceMenu';
import Recommendation from '../homepage/Recommendation';
import '../../styles/homepage/References.css';

const References = () => {
  return (
    <section id='references'>
      <h2>References</h2>
      <h4>
        Quick <span>word of recommendation</span>
      </h4>
      <div className='pt-1'>
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
                linkedIn={reference.linkedIn}
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
