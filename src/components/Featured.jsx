import { Link } from 'react-router-dom';
import { featuredImages } from '../data/galleryImages';

const Featured = () => {
  return (
    <section className="featured" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-background-alt)'}}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}></h2>
        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: 'var(--spacing-lg)' }}>
          {featuredImages.map((item, index) => (
            <div key={index} className="gallery-item" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1' }}>
              <img src={item.src} alt={item.alt} loading="lazy" className="gallery-image" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              <div className="gallery-caption" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white', textAlign: 'center' }}>
                {item.caption}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ textAlign: 'center' }}>
          <Link to="/gallery" className="btn btn-outline">View Full Gallery</Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
