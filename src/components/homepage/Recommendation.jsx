import React from 'react';

const Recommendation = ({
  id,
  defaultChecked, // fix
  name,
  position,
  company,
  recommendation,
  contactUrl,
  companyUrl,
}) => {
  return (
    <div>
      <input
        id={id}
        type='radio'
        name='radio'
        className='tab-item-toggler'
        defaultChecked={defaultChecked} // fix
      />
      <div className='recommendations-container'>
        <i class='fa-solid fa-quote-left'></i>
        <p>&quot;{recommendation}&quot;</p>
        <div className='citation'>
          &#8212;{' '}
          <a href={contactUrl} target='_blank'>
            {name}
          </a>
          <div>
            {position} at{' '}
            <a href={companyUrl} target='_blank'>
              {company}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
