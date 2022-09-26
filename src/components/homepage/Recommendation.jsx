import React from 'react';

const Recommendation = ({ id, name, position, company, recommendation }) => {
  return (
    <div>
      <input id={id} type='radio' name='radio' className='tab-item-toggler' />
      <div className='recommendations-container'>
        {/* <i class='fa-solid fa-quote-left'></i> */}
        <p>&quot;{recommendation}&quot;</p>
        <div className='citation'>
          &#8212; <span>{name}</span>
          <div>
            {position} at
            <span> {company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
