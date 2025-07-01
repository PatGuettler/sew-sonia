import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Bridal Alterations",
    description: "Expert alterations to make your purchased wedding dress fit you perfectly.",
    link: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    title: "Bridal Party Services",
    description: "Get everyone’s dress fitting perfect for the big day.",
    link: "/services",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    )
  },
  {
    title: "Formalwear & Special Occasion",
    description: "Custom-tailored dresses for all your special events and occasions.",
    link: "/services",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    )
  },
    {
    title: "Custom Creations",
    description: "Custom creations for all your special events and occasions.",
    link: "/services",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    )
  }
];

const ServicesPreview = () => {
  return (
    <section className="services-preview" style={{ padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Services</h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: 'var(--spacing-lg)'}}>
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ backgroundColor: 'var(--color-background)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)', padding: 'var(--spacing-lg)', textAlign: 'center' }}>
              <div className="service-icon" style={{ margin: '0 auto var(--spacing-md)', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Learn More</Link>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ textAlign: 'center' }}>
          <Link to="/services" className="btn btn-outline">All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;