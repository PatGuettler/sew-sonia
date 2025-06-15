import { Link } from 'react-router-dom';

// Image paths are based on the assumption they are in the `public/images/` directory
const featuredItems = [
  {
    src: "/images/formal/bm-fg.jpg",
    alt: "Special Occasion",
    caption: "Special Occasion",
  },
  {
    src: "/images/bridal/SA-0072.jpg",
    alt: "Custom Bustle",
    caption: "Custom Bustle",
  },
  {
    src: "/images/alterations/1534574339164211092.png",
    alt: "Mother of the bride",
    caption: "Mother of the bride",
  },
];

const Featured = () => {
  return (
    <section className="featured" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-background-alt)'}}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Featured Work</h2>
        {/* Changed minmax to 250px to make the grid items smaller */}
        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: 'var(--spacing-lg)' }}>
          {featuredItems.map((item, index) => (
            // Added aspectRatio to make the container a square
            <div key={index} className="gallery-item" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1' }}>
              {/* Added height and objectFit to make the image fill the square */}
                <img src={item.src} alt={item.alt} className="gallery-image" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
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