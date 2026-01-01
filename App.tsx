
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Results from './Results';
import Contact from './Contact';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
