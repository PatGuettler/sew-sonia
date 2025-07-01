import { Link } from 'react-router-dom';
import Featured from '../components/Featured';
import ServicesPreview from '../components/ServicesPreview';
import PerfectFit from '../components/PerfectFit';

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        <span style={{display: 'block', fontSize: '1.5rem', fontWeight: 'normal'}}>Elegant Stitches by</span>
                        <span style={{display: 'block'}}>SewSonia</span>
                    </h1>
                    <p className="lead">Custom Alterations for any special occasion dress or gown</p>
                    <div className="hero-buttons">
                        <Link to="/gallery" className="btn btn-primary">View Portfolio</Link>
                        <Link to="/contact" className="btn btn-secondary">Schedule Consultation</Link>
                    </div>
                </div>
            </section>

            <section className="intro" style={{padding: 'var(--spacing-xl) 0', textAlign: 'center'}}>
                <div className="container">
                    <h2>Get your perfect fit</h2>
                    <p>It’s your dress and it should fit like it was made for you. Let SewSonia make that happen!</p>
                </div>
                <PerfectFit />
            </section>
            <section className="intro" style={{padding: 'var(--spacing-xl) 0', textAlign: 'center'}}>
                <div className="container">
                    <h2>Show off your best look</h2>
                    <p>It’s your moment, and our featured work proves that flawless style starts with the perfect details. Let SewSonia bring your vision to life!</p>
                </div>
                <Featured /> 
            </section>
            
            <ServicesPreview />

            <section className="cta" style={{backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-xl) 0', textAlign: 'center'}}>
                <div className="container">
                    <h2>Ready to get your dress fitting like it was made for you?</h2>
                    <p>Schedule a fitting today to get started</p>
                    <Link to="/contact" className="btn btn-primary" style={{backgroundColor: 'white', color: 'var(--color-primary)'}}>Contact Sonia</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
