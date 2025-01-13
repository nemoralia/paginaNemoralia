import React, { useState } from 'react';
import './Carrito.css';

function Carrito() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Tu Carrito</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
}

export default Carrito;
