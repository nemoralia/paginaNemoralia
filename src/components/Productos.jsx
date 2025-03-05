import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <br></br>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.ID} className="producto-item">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio} COP</p>
            <p>Características: {producto.caracteristicas}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;