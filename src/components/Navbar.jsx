import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [expandMobileMenu, setExpandMobileMenu] = useState(false);
  const [checked, setChecked] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setExpandMobileMenu(false);
  }, [location]);

  const links = ['home', 'experience', 'skills', 'education', 'references', 'contact'];

  // Mobile nav
  const mbNav = links.map((link, i) => {
    const isActive = location.pathname === (link === 'home' ? '/' : `/${link}`);

    return (
      <NavLink
        to={link === 'home' ? '/' : `/${link}`}
        key={i}
        onClick={() => {
          setChecked((c) => !c);
        }}
        className={isActive ? 'active' : 'inactive'}
      >
        {link}
      </NavLink>
    );
  });

  // Desktop nav
  const dtNav = links.map((link, i) => {
    const isActive = location.pathname === (link === 'home' ? '/' : `/${link}`);

    return (
      <NavLink
        to={link === 'home' ? '/' : `/${link}`}
        key={i}
        className={isActive ? 'active' : 'inactive'}
      >
        {link}
      </NavLink>
    );
  });

  return (
    <div>
      {/* Mobile Nav */}
      <div className='mobile-nav' id={expandMobileMenu ? 'open' : ''}>
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

      {/* Desktop Nav */}
      <aside className='desktop-nav'>
        <NavLink to='/' className='avatar'></NavLink>
        <div className='links'>{dtNav}</div>
      </aside>
    </div>
  );
};

export default Navbar;
