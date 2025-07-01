const FormalGallery = () => {
    const images = import.meta.glob('/public/images/formal/*.{jpg,jpeg,png,gif}', {
        eager: true,
        import: 'default',
    });

    const imagePaths = Object.keys(images).map((path) => path.replace('/public', ''));

    return (
        <section className="page-content" style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Formal Gallery</h1>
                <p style={{ color: '#b97b5c', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    A collection of graceful and elegant formal looks.
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {imagePaths.map((src, i) => (
                        <div
                            key={i}
                            style={{
                                overflow: 'hidden',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                backgroundColor: '#fafafa',
                            }}
                        >
                            <img
                                src={src}
                                alt={`Formal ${i + 1}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '3 / 4',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FormalGallery;
