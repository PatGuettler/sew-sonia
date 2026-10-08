import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = ({ siteConfig }) => {
    const [searchParams] = useSearchParams();
    const service = searchParams.get('service') || undefined;

    return (
        <section className="page-content">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Contact</h1>
                    <p className="page-description">Get in touch with SewSonia about alterations, embroidery, and consultations</p>
                </header>

                <div className="content">
                    <p>I'd love to hear about your vision for your special day or event. Whether you need alterations, would like custom embroidery, or just have questions about my services, please don't hesitate to reach out.</p>

                    <h2>Send a Message</h2>
                    <p>Fill out the form below to schedule a consultation or ask about alterations or embroidery work, and I'll get back to you.</p>

                    <ContactForm recipientEmail={siteConfig.email} defaultService={service} />

                    <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>

                    <h2>Follow on Social Media</h2>
                    <p>Stay updated with my latest creations and behind-the-scenes moments:</p>
                    <ul>
                        <li><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
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