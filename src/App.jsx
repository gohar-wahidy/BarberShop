import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['home', 'services', 'gallery', 'contact'];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, clientHeight } = element;
        if (scrollPosition >= offsetTop - clientHeight / 2 && scrollPosition < offsetTop + clientHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-white">
      <Header />
      <div className="flex flex-col">
        <div id="home" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
          <Home />
        </div>
        <div id="services" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
          <Services />
        </div>
        <div id="gallery" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
          <Gallery />
        </div>
        <div id="contact" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
          <Contact />
        </div>
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <button
          onClick={() => scrollToSection('home')}
          className={`w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 scroll-dot ${activeSection === 'home' ? 'bg-white border-2 border-red-700' : 'bg-red-700'}`}
        ></button>
        <button
          onClick={() => scrollToSection('services')}
          className={`w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 scroll-dot ${activeSection === 'services' ? 'bg-white border-2 border-red-700' : 'bg-red-700'}`}
        ></button>
        <button
          onClick={() => scrollToSection('gallery')}
          className={`w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 scroll-dot ${activeSection === 'gallery' ? 'bg-white border-2 border-red-700' : 'bg-red-700'}`}
        ></button>
        <button
          onClick={() => scrollToSection('contact')}
          className={`w-3 h-3 cursor-pointer rounded-full transition-colors duration-300 scroll-dot ${activeSection === 'contact' ? 'bg-white border-2 border-red-700' : 'bg-red-700'}`}
        ></button>
      </div>
      <Footer />
    </div>
  );
}

export default App;