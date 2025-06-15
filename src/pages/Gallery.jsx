const GalleryPage = () => {
    // In a real application, this data would come from an API or a data file.
    const galleryCategories = [
        { title: 'Bridal', description: 'Graceful and elegant bridal gowns.', image: '/images/bridal/IMG_4289.JPG' },
        { title: 'Formal', description: 'Stunning dresses for any formal occasion.', image: '/images/alterations/IMG_3460.JPG' },
        { title: 'Alterations', description: 'See the before-and-after transformations.', image: '/images/bridal/bride-4.jpg' },
    ];

    return (
        <section className="page-content">
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Gallery</h1>
                    <p className="page-description">A collection of custom creations and detailed alterations.</p>
                </header>

                <div className="gallery-categories" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {galleryCategories.map(cat => (
                        <div key={cat.title} className="gallery-category">
                            <a href="#" className="category-link" onClick={(e) => e.preventDefault()}>
                                <div className="category-image" style={{ aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                                    {/* Replace with actual images */}
                                    <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                                </div>
                                <h3 className="category-title" style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#fff', margin: 0 }}>{cat.title}</h3>
                                <p className="category-description" style={{ padding: '0 1rem 1rem', textAlign: 'center', color: '#767676' }}>{cat.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;