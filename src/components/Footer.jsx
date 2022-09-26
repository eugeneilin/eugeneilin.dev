import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link to='https://github.com/eugeneilin' target='_blank'>
          <i className='fab fa-github fa-2x'></i>
        </Link>
        <Link to='https://www.linkedin.com/in/eugene-ilin/' target='_blank'>
          <i className='fab fa-linkedin-in fa-2x'></i>
        </Link>
      </div>
      <p>&copy; 2022 EugeneIlin.dev</p>
    </div>
  );
};

export default Footer;
