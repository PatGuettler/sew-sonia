import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            {siteConfig.instagram && (
              <a href={`https://instagram.com/${siteConfig.instagram}`} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            )}
            {siteConfig.facebook && (
               <a href={`https://facebook.com/${siteConfig.facebook}`} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            )}
            {siteConfig.pinterest && (
               <a href={`https://pinterest.com/${siteConfig.pinterest}`} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;