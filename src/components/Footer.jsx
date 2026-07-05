import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ menuItems, siteConfig }) => {
    const currentYear = new Date().getFullYear();
    const sortedMenuItems = menuItems.sort((a, b) => a.weight - b.weight);

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-branding">
                        <svg className="footer-logo" width="160" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="25" fontFamily="'Cormorant Garamond', serif" fontSize="22" fill="#fff">SewSonia</text>
                        </svg>
                        <p className="footer-tagline">Creating your perfect dress with precision and passion</p>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-heading">Contact</h3>
                        <address>
                            {siteConfig.phone && <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>}
                            {siteConfig.email && <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>}
                        </address>
                    </div>

                    <div className="footer-links">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul>
                            {sortedMenuItems.map(item => (
                                <li key={item.name}><Link to={item.url}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3 className="footer-heading">Follow</h3>
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
                            {siteConfig.etsy && (
                              <a href={siteConfig.etsy} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Etsy">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                </svg>
                              </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} SewSonia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;