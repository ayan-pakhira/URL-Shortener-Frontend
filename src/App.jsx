import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrlShortenerForm from './components/UrlShortenerForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UrlShortenerForm />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
