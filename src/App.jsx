import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './App.css';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import Registro from './components/Registro';
import Olvidaste from './components/Olvidaste';
import Carrito from './components/Carrito';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Ofertas from './components/Ofertas';

function App() {
  const [nombreUsuario, setNombreUsuario] = useState("Login");
  const navigate = useNavigate();

  const [usuarioRegistro, setUsuarioRegistro] = useState("");
  const [claveRegistro, setClaveRegistro] = useState("");
  const [confirmarClaveRegistro, setConfirmarClaveRegistro] = useState("");
  const [nombreRegistro, setNombreRegistro] = useState("");
  const [apellidoRegistro, setApellidoRegistro] = useState("");
  const [telefonoRegistro, setTelefonoRegistro] = useState("");
  const [direccionRegistro, setDireccionRegistro] = useState("");
  const [fechaNacimientoRegistro, setFechaNacimientoRegistro] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function validar() {
      try {
        const res = await fetch("http://localhost:3000/validar", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setNombreUsuario(data.usuario);
        }
      } catch (error) {
        console.error(error);
      }
    }
    validar();
  }, []);

  async function handleSubmit(e, usuario, clave) {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/login?usuario=${usuario}&clave=${clave}`,
        { credentials: "include" }
      );
      if (res.ok) {
        alert("Inicio de sesión correcto");
        setNombreUsuario(usuario);
        obtenerProductos(); // Llamada a obtenerProductos después de iniciar sesión
      } else {
        alert("Inicio de sesión incorrecto");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        setNombreUsuario("Login");
        navigate("/");
        alert("Sesión cerrada correctamente");
      } else {
        alert("Error al cerrar sesión");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function registrar() {
    try {
      const peticion = await fetch(`http://localhost:3000/registro?usuario=${usuarioRegistro}&clave=${claveRegistro}&nombre=${nombreRegistro}&apellido=${apellidoRegistro}&telefono=${telefonoRegistro}&direccion=${direccionRegistro}&fecha_nacimiento=${fechaNacimientoRegistro}`, { credentials: "include" });
      if (peticion.ok) {
        alert("Registro exitoso");
        setNombreUsuario(usuarioRegistro);
        obtenerProductos(); // Llamada a obtenerProductos después de registrarse
        navigate("/");
      } else if (peticion.status === 409) {
        alert("El usuario ya existe");
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error(error);
      alert("Error en el servidor");
    }
  }

  async function obtenerProductos() {
    try {
      const peticion = await fetch("http://localhost:3000/productos", { credentials: "include" });
      if (peticion.ok) {
        const respuesta = await peticion.json();
        setProductos(respuesta);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="root">
      <header className="header">
        <nav className="navbar navbar-expand-lg justify-content-between">
          <div className="d-flex justify-content-center w-100">
            <Link to="/">
              <img src="https://i.imgur.com/F5dBoBn.png" alt="LOGO PRINCIPAL NEMORALIA" />
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-sign-in-alt"></i> {nombreUsuario}
              </Link>
            </li>
            {nombreUsuario !== "Login" && (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                </button>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/shopping_cart">
                <i className="fas fa-shopping-cart"></i> Carrito
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><Link className="nav-link" to="/productos/ofertas">Ofertas</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setNombreUsuario={setNombreUsuario} handleSubmit={handleSubmit} handleLogout={handleLogout} />} />
        <Route path="/registro" element={<Registro 
          usuarioRegistro={usuarioRegistro} 
          setUsuarioRegistro={setUsuarioRegistro}
          claveRegistro={claveRegistro}
          setClaveRegistro={setClaveRegistro}
          confirmarClaveRegistro={confirmarClaveRegistro}
          setConfirmarClaveRegistro={setConfirmarClaveRegistro}
          nombreRegistro={nombreRegistro}
          setNombreRegistro={setNombreRegistro}
          apellidoRegistro={apellidoRegistro}
          setApellidoRegistro={setApellidoRegistro}
          telefonoRegistro={telefonoRegistro}
          setTelefonoRegistro={setTelefonoRegistro}
          direccionRegistro={direccionRegistro}
          setDireccionRegistro={setDireccionRegistro}
          fechaNacimientoRegistro={fechaNacimientoRegistro}
          setFechaNacimientoRegistro={setFechaNacimientoRegistro}
          registrar={registrar}
        />} />
        <Route path="/olvidaste" element={<Olvidaste />} />
        <Route path="/shopping_cart" element={<Carrito />} />
        <Route path="/productos" element={<Productos nombreUsuario={nombreUsuario} />} />
        <Route path="/productos/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <footer className="footer text-white mt-5 p-4 text-center">
        <div className="container">
          <h4>NEMORALIA</h4>
          <p>Dirección: Calle Falsa 123, Villavicencio - Meta, Colombia</p>
          <p>Teléfono: +57 3193061149</p>
          <p>Email: jdpena73@soy.sena.edu.co</p>
          <p>© 2024 Nemoralia. Todos los derechos reservados.</p>
        </div>
      </footer>
      <a href="https://wa.me/573193061149" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i> ¿Necesitas ayuda? <br></br>Chatea con nosotros
      </a>
    </div>
  );
}

export default App;