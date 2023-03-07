import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = ({ hashUrl }) => {
  const [expandMobileMenu, setExpandMobileMenu] = useState(false);
  const [checked, setChecked] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setExpandMobileMenu(false);
  }, [location]);

  // const useHashFragment = (offset = 0, trigger = true) => {
  //   useEffect(() => {
  //     const scrollToHashElement = () => {
  //       const { hash } = window.location;
  //       const elementToScroll = document.getElementById(hash?.replace('#', ''));

  //       if (!elementToScroll) return;

  //       window.scrollTo({
  //         top: elementToScroll.offsetTop - offset,
  //         behavior: 'smooth',
  //       });
  //     };

  //     if (!trigger) return;

  //     scrollToHashElement();
  //     window.addEventListener('hashchange', scrollToHashElement);
  //     return window.removeEventListener('hashchange', scrollToHashElement);
  //   }, [trigger]);
  // };

  const links = ['about', 'experience', 'skills', 'education', 'references', 'contact'];

  // ----- Option 1 -----
  const [index, setIndex] = useState(false);

  const handleClick = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const activeIndex = links.findIndex((link) => link === hashUrl);
    // console.log(activeIndex);
    if (activeIndex || activeIndex === 0) {
      setIndex(activeIndex);
    }
  }, [hashUrl]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -72;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  // Mobile nav
  const mbNav = links.map((link, i) => {
    return (
      <NavHashLink
        smooth
        scroll={scrollWithOffset}
        to={`/#${link}`}
        key={i}
        onClick={() => {
          handleClick(i);
          setChecked((c) => !c);
        }}
        className={i === index ? 'active' : 'inactive'}
      >
        {link}
      </NavHashLink>
    );
  });

  // Desktop nav
  const dtNav = links.map((link, i) => {
    return (
      <NavHashLink
        smooth
        to={`/#${link}`}
        key={i}
        onClick={() => handleClick(i)}
        className={i === index ? 'active' : 'inactive'}
      >
        {link}
      </NavHashLink>
    );
  });

  return (
    <div>
      <div className='mobile-navbar-wrap' id={expandMobileMenu ? 'open' : ''}>
        <div className='mobile-navbar'>
          <NavHashLink className='link' to='/#about' smooth>
            <h2 className='mobile-logo'>EI</h2>
          </NavHashLink>
          <input
            type='checkbox'
            className='toggler'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            onClick={() => {
              setExpandMobileMenu((prev) => !prev);
            }}
          />
          <div className='menu-btn'>
            <div></div>
          </div>
          <div className='mobile-overlay'>
            <div className='links'>{mbNav}</div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <aside className='desktop-nav'>
        <NavHashLink smooth to='/#about' className='avatar'></NavHashLink>
        <div className='links'>
          {/* --- Option 1 Rendered ---  */}
          {dtNav}

          {/* --- Option 2 Rendered ---
          {links.map((link) => {
            return (
              <NavHashLink
                smooth
                to={`/#${link}`}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                {link}
              </NavHashLink>
            );
          })} */}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
