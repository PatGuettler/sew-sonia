import { Link } from 'react-router-dom';

const GalleryPage = () => {
    const galleryCategories = [
        { title: 'Bridal', slug: 'bridal', description: 'Graceful and elegant bridal gowns.', image: '/images/bridal/IMG_4289.JPG' },
        { title: 'Formal', slug: 'formal', description: 'Stunning dresses for any formal occasion.', image: '/images/alterations/IMG_3460.JPG' },
        { title: 'Alterations', slug: 'alterations', description: 'See the before-and-after transformations.', image: '/images/bridal/bride-4.jpg' },
    ];

    return (
        <section className="page-content">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Gallery</h1>
                    <p className="page-description">Explore our portfolio of custom bridal gowns, formalwear, and alterations</p>
                </header>

                <div className="gallery-categories" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {galleryCategories.map(cat => (
                        <div key={cat.slug} className="gallery-category">
                            <Link to={`/gallery/${cat.slug}`} className="category-link">
                                <div className="category-image" style={{ aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                                <h3 className="category-title" style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#fff', margin: 0 }}>{cat.title}</h3>
                                <p className="category-description" style={{ padding: '0 1rem 1rem', textAlign: 'center', color: '#767676' }}>{cat.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;
