import React from 'react';
import './Services.css';

// Importa tus imágenes aquí (ajusta las rutas)
// import imgCalentadores from '../../assets/calentador-servicio.jpg';

const Services = () => {
  const servicios = [
    {
      titulo: "Calentadores de agua: de paso, de acumulación y eléctricos",
      descripcion: "Reparamos los problemas de tu calentador, como que no encienda, se apague, no caliente, tenga fuga de gas, bote agua, o cualquier otra irregularidad. Garantizamos un servicio rápido y confiable.",
      img: "ruta-a-tu-imagen-1.jpg" // Reemplaza por tus variables de imagen
    },
    {
      titulo: "Lavadoras y secadoras automáticas, de carga frontal y superior",
      descripcion: "Corregimos fallas como: no prende, se apaga, no centrifuga, no llena, hace mucho ruido o no lava. Llámanos sin compromiso; estaremos encantados de ofrecerte la solución.",
      img: "ruta-a-tu-imagen-2.jpg"
    },
    {
      titulo: "Estufas, hornos y campanas extractoras",
      descripcion: "Solucionamos problemas como: quemador que no prende, fuga de gas, perilla bloqueada o llama débil. Te garantizamos el óptimo funcionamiento de tus electrodomésticos.",
      img: "ruta-a-tu-imagen-3.jpg"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>¿En qué necesitas ayuda?</h2>
        <p>La calidad que tu hogar merece. Servicio a domicilio confiable y reconocido en toda Colombia.</p>
      </div>

      <div className="services-container">
        {servicios.map((servicio, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-wrapper">
              <img src={servicio.img} alt={servicio.titulo} />
              <div className="service-badge-available">
                SERVICIO DISPONIBLE
              </div>
            </div>
            <div className="service-info">
              <h3>{servicio.titulo}</h3>
              <div className="service-description-box">
                <p>{servicio.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;