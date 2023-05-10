import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExperienceItem = ({ image, name, highlight, slug, tag }) => {
  const navigate = useNavigate();

  return (
    <div
      className='experienceItem'
      onClick={() => {
        navigate(`/experience/${slug}/`);
      }}
    >
      <div className='img-wrap'>
        {tag ? <div className='tag'>{tag}</div> : null}
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      </div>
      <div className='text'>
        <h3>{name}</h3>
        <h4>{highlight}</h4>
      </div>
    </div>
  );
};

export default ExperienceItem;
