import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="page-content">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Services</h1>
          <p className="page-description">Explore our bridal and special occasion dress services</p>
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
            <li><strong>Initial Consultation:</strong> 30-90 minute appointment to discuss needs and options</li>
            <li><strong>Pricing:</strong> $25 initial consultation fee (applied to final service cost when booked)</li>
          </ul>
          <p>To schedule a consultation or inquire about services, please <Link to="/contact">contact me</Link>.</p>
          
          <h2>Alterations Prices</h2>

          <h3>Bridal Alterations</h3>
          <ul>
            <li>$45 Shorten straps</li>
            <li>$80 Shorten shoulders with sleeves</li>
            <li>$45 Lower armholes (add $30 for sleeves)</li>
            <li>$125 Add corset back</li>
            <li>$50 Take in/out sides</li>
            <li>$80 Take in/out sides with lace/beading</li>
          </ul>

          <h3>Gown Hem (add $25 to layer with slit)</h3>
          <ul>
            <li>$15 Cut edge, column (per layer)</li>
            <li>$125 A-line (+$25 per additional layer)</li>
            <li>$175 ballgown (+$30 per additional layer)</li>
            <li>Add $90 move Lace/beading</li>
          </ul>
          
          <h3>Bustle Train</h3>
          <ul>
              <li>$55 Bustle (3 pts)</li>
              <li>$75 Bustle (5-7 pts)</li>
              <li>$120 Bustle (8+ pts)</li>
          </ul>

          <h3>Bridesmaid/Formal Dress Alterations</h3>
          <ul>
              <li>$40 shorten straps</li>
              <li>$45 Take in/out sides</li>
              <li>$25 Add bra cups</li>
          </ul>

          <h3>Hem</h3>
          <ul>
              <li>$45 column single layer</li>
              <li>$85 A-line (add $25 per additional layer)</li>
              <li>$120 ballgown (add $25 per additional layer)</li>
          </ul>
          
          <h3>Rush Fee</h3>
          <ul>
            <li><strong>14 business days, or less, for non-formal:</strong> $100</li>
            <li><strong>21 business days, or less, for bridal party and wedding dresses:</strong> $150</li>
          </ul>
          <p><strong>Items needed in less than 10 business days will not be accepted</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Services;