import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact-form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service of Interest</label>
        <select id="service" name="service">
          <option>Bridal Alterations</option>
          <option>Formalwear Alterations</option>
          <option>Embroidery</option>
          <option>Consultation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;