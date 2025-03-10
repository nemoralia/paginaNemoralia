import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Productos.css';

function Productos({ nombreUsuario }) {
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

  async function eliminarProducto(id) {
    try {
      const peticion = await fetch("http://localhost:3000/productos?id=" + id, { 
        credentials: "include", 
        method: "DELETE" 
      });
      if (peticion.ok) {
        setProductos(productos.filter(producto => producto.id !== id));
      } else {
        console.error('Error al eliminar el producto:', await peticion.text());
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }

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

      {nombreUsuario !== "Login" && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Características</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.ID}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.caracteristicas}</td>
                <th>
                  <button onClick={() => eliminarProducto(producto.id)}>X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Productos;