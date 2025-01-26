import React from 'react';
import { Carousel } from 'react-bootstrap';
import './OffersCarousel.css'; // Importa el archivo CSS para los estilos personalizados

function OffersCarousel() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Oferta 1"
        />
        <Carousel.Caption>
          <h3>Oferta 1</h3>
          <p>Descripción de la oferta 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Oferta 2"
        />
        <Carousel.Caption>
          <h3>Oferta 2</h3>
          <p>Descripción de la oferta 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Oferta 3"
        />
        <Carousel.Caption>
          <h3>Oferta 3</h3>
          <p>Descripción de la oferta 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default OffersCarousel;