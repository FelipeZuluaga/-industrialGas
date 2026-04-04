import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeAboutUsro from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
       <Navbar />
      {/* Aquí iría el Navbar más adelante */}
      <Hero />
      <HeAboutUsro />
      <Services />
      <Contact />
    </div>
  );
}

export default App;