import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  const siteConfig = {
    email: "sewsonia991@gmail.com",
    phone: "1 (256) 679-0994",
    instagram: "elegantstitchesbysonia",
    facebook: "elegantstitchesbysonia",
    pinterest: "elegantstitchesbysonia",
  };
  
  const menuItems = [
    { name: "Home", url: "/", weight: 1 },
    { name: "Gallery", url: "/gallery", weight: 2 },
    { name: "Services", url: "/services", weight: 3 },
    { name: "About", url: "/about", weight: 4 },
    { name: "Contact", url: "/contact", weight: 5 },
  ];

  return (
    <>
      <Header menuItems={menuItems} siteConfig={siteConfig} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact siteConfig={siteConfig}/>} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer menuItems={menuItems} siteConfig={siteConfig} />
    </>
  )
}

export default App;