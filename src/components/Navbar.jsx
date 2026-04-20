import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        {/* Cambiado el alt para que sea profesional */}
        <img src={logo} alt="IndustrialGas Logo" className="nav-logo" />
      </div>

      <div
        className={`nav-hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <a href="/#inicio" onClick={closeMenu}>Inicio</a>
        <a href="/#mision-vision" onClick={closeMenu}>Conocenos</a>
        <a href="/#planes" onClick={closeMenu}>Servicios</a>
        <a href="/#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;