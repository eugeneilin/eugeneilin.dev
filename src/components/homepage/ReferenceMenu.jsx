import React from 'react';

const ReferenceMenu = ({ id, image, name, position, company }) => {
  return (
    <ul className='tab-list'>
      <li className='tab-item'>
        <label htmlFor={id}>
          <div
            className='tab-item-img'
            style={{ background: `url(${image}) no-repeat center / cover` }}
          ></div>
          <span className='tab-item-info'>
            <h4>{name}</h4>
            <p>
              {position} at {company}
            </p>
          </span>
        </label>
      </li>
    </ul>
  );
};

export default ReferenceMenu;
