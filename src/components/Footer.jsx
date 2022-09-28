import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <a href='https://github.com/eugeneilin' target='_blank'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a href='https://www.linkedin.com/in/eugene-ilin/' target='_blank'>
          <i className='fab fa-linkedin-in fa-2x'></i>
        </a>
      </div>
      <p>&copy; 2022 Eugene Ilin.</p>
    </div>
  );
};

export default Footer;
