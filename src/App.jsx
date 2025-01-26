import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import Registro from './components/Registro';
import Olvidaste from './components/Olvidaste';
import Carrito from './components/Carrito';
import OffersCarousel from './components/OffersCarousel';

function App() {
  return (
    <div id="root">
      {/* PENDIENTE INCLUIR LA MARCA DE AGUA */}
      <header className="header">
        <nav className="navbar navbar-expand-lg justify-content-between">
          {/* PENDIENTE INCLUIR LA MARCA DE AGUA */}
          <div className="d-flex justify-content-center w-100">
            <Link to="/">
              <img src="https://i.imgur.com/F5dBoBn.png" alt="LOGO PRINCIPAL NEMORALIA" />
            </Link>
          </div>
          {/* SE BUSCA QUE SEA ICONOS */}
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shopping_cart">Carrito</Link></li>
          </ul>
        </nav>
      </header>
      <OffersCarousel />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/productos/camisetas">Camisetas</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/productos/tazas">Tazas</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/productos/artesanias">Artesanías</Link></li>
        </ul>
      </nav>
      <div className="container-full-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/olvidaste" element={<Olvidaste />} />
          <Route path="/shopping_cart" element={<Carrito />} />
          <Route path="/productos/camisetas" element={<div>Camisetas</div>} />
          <Route path="/productos/tazas" element={<div>Tazas</div>} />
          <Route path="/productos/artesanias" element={<div>Artesanías</div>} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
      <footer className="footer text-white mt-5 p-4 text-center">
        <div className="container">
          <h4>NEMORALIA</h4>
          <p>Dirección: Calle Falsa 123, Villavicencio - Meta, Colombia</p>
          <p>Teléfono: +57 3193061149</p>
          <p>Email: jdpena73@soy.sena.edu.co</p>
          <p>© 2024 Nemoralia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;