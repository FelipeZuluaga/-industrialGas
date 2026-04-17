import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiencia from './components/Experiencia';
import ServiciosDetalle from './components/ServiciosDetalle';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'var(--blue-dark)' }}>
      <Navbar />
      
      <section id="inicio">
        <Hero />
      </section>

      {/* Usamos Experiencia como la sección "Conócenos" */}
      <section id="mision-vision">
        <Experiencia />
      </section>

      <section id="planes">
        <ServiciosDetalle />
      </section>

      <section id="contacto">
        <Contact />
      </section>
    </div>
  );
}

export default App;