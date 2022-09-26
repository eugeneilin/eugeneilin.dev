import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expandMobileMenu, setExpandMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandMenu(false);
  }, [location]);

  return (
    <div>
      <div className='mobile-navbar-wrap' id={expandMobileMenu ? 'open' : ''}>
        <div className='mobile-navbar'>
          <HashLink className='link' to='/#about' smooth>
            <h2 className='mobile-logo'>EI</h2>
          </HashLink>
          <input
            type='checkbox'
            className='toggler'
            onClick={() => {
              setExpandMenu((prev) => !prev);
            }}
          />
          <div className='menu-btn'>
            <div></div>
          </div>
          <div className='mobile-overlay'>
            <div className='links'>
              <HashLink to='/#about' smooth>
                About
              </HashLink>
              <HashLink to='/#experience' smooth>
                Experience
              </HashLink>
              <HashLink to='/#skills' smooth>
                Skills
              </HashLink>
              <HashLink to='/#references' smooth>
                References
              </HashLink>
              <HashLink to='/#contact' smooth>
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <aside className='desktop-nav'>
        <HashLink to='/#about' smooth className='avatar'></HashLink>
        <div className='links'>
          <HashLink to='/#about' smooth>
            About
          </HashLink>
          <HashLink to='/#experience' smooth>
            Experience
          </HashLink>
          <HashLink to='/#skills' smooth>
            Skills
          </HashLink>
          <HashLink to='/#references' smooth>
            References
          </HashLink>
          <HashLink to='/#contact' smooth>
            Contact
          </HashLink>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
