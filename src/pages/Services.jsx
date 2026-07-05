import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="page-content">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Services</h1>
          <p className="page-description">Explore our bridal, embroidery, and special occasion dress services</p>
        </header>

        <div className="content">
          <p>At SewSonia, I offer a comprehensive range of services to ensure you look and feel your absolute best for your special day or formal event.</p>

          <h2>Custom Alterations</h2>
          <p>Bring your dreams into reality with expert alterations to make your wedding dress fit you perfectly.</p>
          <ul>
            <li><strong>Timeline:</strong> 6-8 weeks depending on your needs</li>
          </ul>

          <h2>Consultations</h2>
          <p>Schedule a consultation to discuss your vision and explore how I can help create your perfect fit.</p>
          <ul>
            <li>30-90 minute appointment to discuss needs and options</li>
          </ul>
          <p>To schedule a consultation or inquire about services, please <Link to="/contact">contact me</Link>.</p>

          <h2>Embroidery</h2>
          <p>Custom embroidery for bridal veils, monograms, handkerchiefs, and special keepsakes. Browse ready-made designs and order custom pieces through my Etsy shop.</p>
          <ul>
            <li>Custom monograms and names</li>
            <li>Bridal veils and accessories</li>
            <li>Handkerchiefs and gift items</li>
            <li>Personalized embroidery designs</li>
          </ul>
          <p>
            <a href="https://sewsoniadesigns.etsy.com/" target="_blank" rel="noopener noreferrer">Visit SewSonia Designs on Etsy</a>
          </p>

          <h2>Bridal Alterations</h2>
          <ul>
            <li>Shorten straps</li>
            <li>Shorten shoulders with sleeves</li>
            <li>Lower armholes (with optional sleeve adjustment)</li>
            <li>Add corset back</li>
            <li>Take in/out sides</li>
            <li>Take in/out sides with lace or beading</li>
          </ul>

          <h2>Gown Hem</h2>
          <ul>
            <li>Cut edge, column (per layer)</li>
            <li>A-line</li>
            <li>Ballgown</li>
            <li>Layers with slit</li>
            <li>Move lace or beading</li>
          </ul>

          <h2>Bustle & Train</h2>
          <ul>
            <li>Bustle (3 points)</li>
            <li>Bustle (5-7 points)</li>
            <li>Bustle (8+ points)</li>
          </ul>

          <h2>Bridesmaid & Formal Dress Alterations</h2>
          <ul>
            <li>Shorten straps</li>
            <li>Take in/out sides</li>
            <li>Add bra cups</li>
          </ul>

          <h2>Formal Dress Hem</h2>
          <ul>
            <li>Column, single layer</li>
            <li>A-line</li>
            <li>Ballgown</li>
          </ul>

          <h2>Rush Service</h2>
          <ul>
            <li>Available for non-formal items with 14 business days or less</li>
            <li>Available for bridal party and wedding dresses with 21 business days or less</li>
          </ul>
          <p><strong>Items needed in less than 10 business days will not be accepted.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Services;
