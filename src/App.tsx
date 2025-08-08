import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWatches from './components/FeaturedWatches';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedWatches />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;