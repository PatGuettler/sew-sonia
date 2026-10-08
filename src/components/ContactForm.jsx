import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MAX_PHOTOS = 5;
const MAX_DIMENSION = 1600;

// Shrink photos in the browser so large phone pictures upload quickly.
const resizeImage = (file) =>
  new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) => {
          if (!blob) return resolve(file);
          const name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
          resolve(new File([blob], name, { type: 'image/jpeg' }));
        },
        'image/jpeg',
        0.85
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };
    img.src = url;
  });

const ContactForm = ({ recipientEmail, defaultService }) => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(searchParams.get('sent') ? 'success' : 'idle');
  const [photos, setPhotos] = useState([]);
  const attachmentsRef = useRef(null);
  const photosRef = useRef(photos);
  photosRef.current = photos;

  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.preview)), []);

  const handlePhotoChange = (event) => {
    const added = Array.from(event.target.files)
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => ({ file, preview: URL.createObjectURL(file) }));
    setPhotos((current) => [...current, ...added].slice(0, MAX_PHOTOS));
    event.target.value = '';
  };

  const removePhoto = (index) => {
    URL.revokeObjectURL(photos[index].preview);
    setPhotos((current) => current.filter((_, i) => i !== index));
  };

  // Posts the form normally (not AJAX) so FormSubmit accepts the photo
  // attachments, then FormSubmit redirects back here with ?sent=1.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatus('submitting');

    const container = attachmentsRef.current;
    container.innerHTML = '';
    const resized = await Promise.all(photos.map((p) => resizeImage(p.file)));
    resized.forEach((file, i) => {
      const transfer = new DataTransfer();
      transfer.items.add(file);
      const input = document.createElement('input');
      input.type = 'file';
      input.name = `photo_${i + 1}`;
      input.files = transfer.files;
      container.appendChild(input);
    });

    form.submit();
  };

  const nextUrl = `${window.location.origin}/contact?sent=1`;
  const submitting = status === 'submitting';

  return (
    <>
      {status === 'success' && (
        <p className="form-message form-message--success" role="status">
          Thank you! Your message has been sent. Sonia will get back to you soon.
        </p>
      )}

      <form
        className="contact-form"
        action={`https://formsubmit.co/${encodeURIComponent(recipientEmail)}`}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New contact request from SewSonia website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_cc" value="patguettler@gmail.com" />
        <input type="hidden" name="_next" value={nextUrl} />
        <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required readOnly={submitting} />
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
            readOnly={submitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" name="service" defaultValue={defaultService}>
            <option>Bridal Alterations</option>
            <option>Formalwear Alterations</option>
            <option>Embroidery</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required readOnly={submitting} />
        </div>
        <div className="form-group">
          <label htmlFor="photos">Photos (optional, up to {MAX_PHOTOS})</label>
          <p className="form-hint">Share your dress, inspiration, or an embroidery design idea.</p>
          {photos.length < MAX_PHOTOS && (
            <input
              type="file"
              id="photos"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              disabled={submitting}
            />
          )}
          {photos.length > 0 && (
            <ul className="photo-previews">
              {photos.map((photo, i) => (
                <li key={photo.preview}>
                  <img src={photo.preview} alt={`Selected photo ${i + 1}`} />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    disabled={submitting}
                    aria-label={`Remove photo ${i + 1}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div ref={attachmentsRef} hidden />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

    </>
  );
};

export default ContactForm;
