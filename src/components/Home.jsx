import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaBox, FaCheck, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      {/* Contenedor de carrusel EN CONSTRUCCIÓN*/}
      <div className="carousel-container small-carousel">
        <Carousel>
          <Carousel.Item>
            <img src="https://i.imgur.com/F5dBoBn.png" alt="Imagen de la empresa" className="d-block w-100 carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://i.imgur.com/F5dBoBn.png" alt="Imagen de la empresa" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Contenedor de productos */}
      <div className="products-container">
        <h2 className="products-title">Conoce nuestros productos</h2>
        <h3 className="products-subtitle">Explora nuestros productos y encuentra el que más te guste.</h3>
        
        <div className="product-grid">
          <div className="product-card">
            <img src="ruta/a/imagen1.jpg" alt="Producto 1" className="product-image" />
            <h3 className="product-title">Nuestras ofertas</h3>
            <p>Ver más</p>
          </div>
          <div className="product-card">
            <img src="ruta/a/imagen2.jpg" alt="Producto 2" className="product-image" />
            <h3 className="product-title">Pocillos</h3>
            <p>Ver más</p>
          </div>
          <div className="product-card">
            <img src="ruta/a/imagen3.jpg" alt="Producto 3" className="product-image" />
            <h3 className="product-title">Velas</h3>
            <p>Ver más</p>
          </div>
          <div className="product-card">
            <img src="ruta/a/imagen4.jpg" alt="Producto 4" className="product-image" />
            <h3 className="product-title">Cuadernos</h3>
            <p>Ver más</p>
          </div>
          <div className="product-card">
            <img src="ruta/a/imagen5.jpg" alt="Producto 5" className="product-image" />
            <h3 className="product-title">Llaveros</h3>
            <p>Ver más</p>
          </div>
          <div className="product-card">
            <img src="ruta/a/imagen6.jpg" alt="Producto 6" className="product-image" />
            <h3 className="product-title">Listones</h3>
            <p>Ver más</p>
          </div>
        </div>
      </div>

      {/* Nuevo contenedor de 4x1 */}
      <div className="info-container">
        <div className="info-card">
          <FaBox className="info-icon" />
          <div>
            <h3 className="info-title">Envios nacionales</h3>
            <p>Envíos seguros en los productos seleccionados por tu transportadora preferida.</p>
          </div>
        </div>
        <div className="info-card">
          <FaCheck className="info-icon" />
          <div>
            <h3 className="info-title">Cambios y devolución</h3>
            <p>Tus compras están protegidas en nuestra tienda.</p>
          </div>
        </div>
        <div className="info-card">
          <FaHeadset className="info-icon" />
          <div>
            <h3 className="info-title">Atención 24 horas</h3>
            <p>Tenemos un equipo especializado dispuesto a ayudarte.</p>
          </div>
        </div>
        <div className="info-card">
          <FaMoneyBillWave className="info-icon" />
          <div>
            <h3 className="info-title">Pagos instantáneos</h3>
            <p>Diferentes modalidades de pagos en línea y presenciales.</p>
          </div>
        </div>
      </div>




      {/* Contenedor de carrusel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-content">
              <img src="https://i.imgur.com/blcufSD.png" alt="Imagen de la empresa" className="carousel-image" />
              <div className="carousel-text">
                <h3>Misión</h3>
                <p>Nuestra misión es...</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <img src="https://i.imgur.com/blcufSD.png" alt="Imagen de la empresa" className="carousel-image" />
              <div className="carousel-text">
                <h3>Visión</h3>
                <p>Nuestra visión es...</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-content">
              <img src="https://i.imgur.com/blcufSD.png" alt="Imagen de la empresa" className="carousel-image" />
              <div className="carousel-text">
                <h3>Cobertura</h3>
                <p>Nuestra cobertura es...</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;