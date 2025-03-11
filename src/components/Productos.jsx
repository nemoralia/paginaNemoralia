import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Productos.css';

// La función Productos recibe un objeto con la propiedad nombreUsuario
// que contiene el nombre del usuario actualmente autenticado
function Productos({ nombreUsuario }) {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    caracteristicas: '',
    imagen: ''
  });
  // La función useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    axios.get('http://localhost:3000/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  // La función eliminarProducto recibe el ID del producto a eliminar
  async function eliminarProducto(id) {
    try {
      const peticion = await fetch("http://localhost:3000/productos?id=" + id, { 
        credentials: "include", 
        method: "DELETE" 
      });
      if (peticion.ok) {
        setProductos(productos.filter(producto => producto.id !== id));
        console.log(`Producto con ID ${id} eliminado exitosamente.`);
      } else {
        console.error('Error al eliminar el producto:', await peticion.text());
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }
  // La función agregarProducto se ejecuta cuando se envía el formulario
  async function agregarProducto(e) {
    e.preventDefault();
    try {
      const peticion = await fetch("http://localhost:3000/productos", {
        credentials: "include",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
      });
      if (peticion.ok) {
        const productoAgregado = await peticion.json();
        setProductos([...productos, productoAgregado]);
        setNuevoProducto({ nombre: '', precio: '', caracteristicas: '', imagen: '' });
        console.log('Producto agregado exitosamente:', productoAgregado);
      } else {
        console.error('Error al agregar el producto:', await peticion.text());
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  }
  // La función añadirACarrito recibe un objeto con la información del producto
  function añadirACarrito(producto) {
    console.log(`Producto con ID ${producto.id} añadido al carrito.`);
    // Aquí puedes añadir la lógica para añadir el producto al carrito
  }

  return (
    // El componente Productos renderiza una lista de productos
    // y un formulario para agregar nuevos productos
    // Si el usuario no está autenticado, no podrá agregar productos SE DEBE CAMBIAR POR UNA AUTENTICACIÓN DE ADMINISTRADOR
    <div>
      <h1>Productos</h1>
      <br></br>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: {"$" + producto.precio} COP</p>
            <p>Características: {producto.caracteristicas}</p>
            <button onClick={() => añadirACarrito(producto)}>Añadir a carrito</button>
          </div>
        ))}
      </div>
      <br></br>
      
      <h3>Crear Productos</h3>
      {nombreUsuario !== "Login" && (
        <form onSubmit={agregarProducto}>
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoProducto.nombre}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={nuevoProducto.precio}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Características"
            value={nuevoProducto.caracteristicas}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, caracteristicas: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={nuevoProducto.imagen}
            onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })}
            required
          />
          <button type="submit">Agregar Producto</button>
        </form>
      )}
      <br></br>
      <h3>Modulo para eliminar producto</h3>
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
              <tr key={producto.id}>
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