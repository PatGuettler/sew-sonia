import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

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
                            <SocialLinks siteConfig={siteConfig} />
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