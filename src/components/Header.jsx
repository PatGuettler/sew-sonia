import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Header = ({ menuItems, siteConfig }) => {
  const [menuActive, setMenuActive] = useState(false);
  
  const sortedMenuItems = menuItems.sort((a, b) => a.weight - b.weight);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="site-branding">
            <Link to="/" className="logo">
              <svg className="logo-svg" width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="25" fontFamily="'Cormorant Garamond', serif" fontSize="22" fill="#363636">SewSonia</text>
              </svg>
            </Link>
          </div>
          
          <nav className="main-navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded={menuActive} onClick={toggleMenu}>
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            
            <ul id="primary-menu" className={`menu ${menuActive ? 'active' : ''}`}>
              {sortedMenuItems.map(item => (
                <li key={item.name} className="menu-item">
                  <NavLink to={item.url} onClick={() => setMenuActive(false)}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="social-links">
            <SocialLinks siteConfig={siteConfig} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;