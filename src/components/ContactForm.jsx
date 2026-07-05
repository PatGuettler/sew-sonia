import React, { useState } from 'react';

const ContactForm = ({ recipientEmail }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.target);
    formData.append('_subject', 'New contact request from SewSonia website');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_replyto', formData.get('email'));

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        }
      );

      if (response.ok) {
        setStatus('success');
        event.target.reset();
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'success' && (
        <p className="form-message form-message--success" role="status">
          Thank you! Your message has been sent. Sonia will get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="form-message form-message--error" role="alert">
          Something went wrong sending your message. Please try again or email{' '}
          <a href={`mailto:${recipientEmail}`}>{recipientEmail}</a> directly.
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required disabled={status === 'submitting'} />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required-indicator" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" name="service" disabled={status === 'submitting'}>
            <option>Bridal Alterations</option>
            <option>Formalwear Alterations</option>
            <option>Embroidery</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required disabled={status === 'submitting'} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
