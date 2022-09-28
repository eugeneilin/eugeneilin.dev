import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expandMobileMenu, setExpandMenu] = useState(false);

  const [checked, setChecked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandMenu(false);
  }, [location]);

  return (
    <div>
      <div className='mobile-navbar-wrap' id={expandMobileMenu ? 'open' : ''}>
        <div className='mobile-navbar'>
          <Link className='link' to='/#about' smooth>
            <h2 className='mobile-logo'>EI</h2>
          </Link>
          <input
            type='checkbox'
            className='toggler'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            onClick={() => {
              setExpandMenu((prev) => !prev);
            }}
          />
          <div className='menu-btn'>
            <div></div>
          </div>
          <div className='mobile-overlay'>
            <div className='links'>
              <Link to='/#about' smooth onClick={() => setChecked((c) => !c)}>
                About
              </Link>
              <Link to='/#experience' smooth onClick={() => setChecked((c) => !c)}>
                Experience
              </Link>
              <Link to='/#skills' smooth onClick={() => setChecked((c) => !c)}>
                Skills
              </Link>
              <Link to='/#references' smooth onClick={() => setChecked((c) => !c)}>
                References
              </Link>
              {/* <Link to='/#my-story' smooth onClick={() => setChecked((c) => !c)}>
                My Story
              </Link> */}
              <Link to='/#contact' smooth onClick={() => setChecked((c) => !c)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <aside className='desktop-nav'>
        <Link to='/#about' smooth className='avatar'></Link>
        <div className='links'>
          <Link to='/#about' smooth>
            About
          </Link>
          <Link to='/#experience' smooth>
            Experience
          </Link>
          <Link to='/#skills' smooth>
            Skills
          </Link>
          <Link to='/#references' smooth>
            References
          </Link>
          {/* <Link to='/#my-story' smooth>
            My Story
          </Link> */}
          <Link to='/#contact' smooth>
            Contact
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
