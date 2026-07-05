import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = ({ siteConfig }) => {
    return (
        <section className="page-content">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Contact</h1>
                    <p className="page-description">Get in touch with SewSonia for consultations and inquiries</p>
                </header>

                <div className="content">
                    <p>I'd love to hear about your vision for your special day or event. Whether you're interested in a custom design, need alterations, or just have questions about my services, please don't hesitate to reach out.</p>

                    <h2>Consultation Requests</h2>
                    <p>To schedule a consultation, please fill out the form below. Initial consultations are $25 (applied to your service when booked) and typically last about 30-90 minutes.</p>

                    <ContactForm />

                    <p><strong>Fitting Hours:</strong><br/>Tuesday - Thursday: 10:00 AM - 6:00 PM</p>
                    <p><strong>Email:</strong> {siteConfig.email}</p>

                    <h2>Follow on Social Media</h2>
                    <p>Stay updated with my latest creations and behind-the-scenes moments:</p>
                    <ul>
                        <li><a href={`https://instagram.com/${siteConfig.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href={`https://facebook.com/${siteConfig.facebook}`} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href={`https://pinterest.com/${siteConfig.pinterest}`} target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                        {siteConfig.etsy && (
                          <li><a href={siteConfig.etsy} target="_blank" rel="noopener noreferrer">Etsy Shop</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;