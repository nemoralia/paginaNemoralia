import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import Registro from './components/Registro';
import Olvidaste from './components/Olvidaste';
import Carrito from './components/Carrito';


function App() {
  return (
    <div id="root">
      <div className="watermark"></div>
      <header className="header">
        <a className="navbar-brand" href="#">
          <img src="https://i.imgur.com/F5dBoBn.png" alt="LOGO PRINCIPAL NEMORALIA" />
        </a>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/home">Inicio</Link></li>
            <li className="nav-item"><Link to="/login">Login</Link></li>
            <li className="nav-item"><Link to="/shopping_cart">Carrito</Link></li>
          </ul>
        </nav>


      </header>
      <div className="container-full-height">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/olvidaste" element={<Olvidaste />} />
          <Route path="/shopping_cart" element={<Carrito />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>


      <footer className="footer">
        <div className="container-fluid">
          <div className="container text-center">
            <h4>NEMORALIA</h4>
            <p>Dirección: Calle Falsa 123, Villavicencio - Meta, Colombia</p>
            <p>Teléfono: +57 3193061149</p>
            <p>Email: jdpena73@soy.sena.edu.co</p>
            <p>© 2024 Nemoralia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;