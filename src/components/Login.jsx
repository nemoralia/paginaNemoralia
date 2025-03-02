import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setNombreUsuario }) {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/login?usuario=${usuario}&clave=${clave}`,
        { credentials: "include" }
      );
      if (res.ok) {
        alert("Inicio de sesión correcto");
        setNombreUsuario(usuario);
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

  return (
    <div className="container-full-height">
      <div className="w-100">
        {/* CUADRO ROJO */}
        <div className="border red-box">
          <h2 className="text-center">
            ¡Hola de nuevo! <br />
            Inicia sesión para continuar.
          </h2>
        </div>
        {/* CUADRO NEGRO */}
        <div className="border shadow black-box">
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3-login">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label form-label-white"
              >
                Usuario
                <br />
              </label>
              <input
                type="text"
                className="form-control input-center login-input"
                id="exampleInputEmail1"
                placeholder="INGRESA TU USUARIO"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="mb-3-login">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label form-label-white"
              >
                Contraseña
                <br />
              </label>
              <input
                type="password"
                className="form-control input-center login-input"
                id="exampleInputPassword1"
                placeholder="INGRESA TU CONTRASEÑA"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-secondary">
              Iniciar sesión
            </button>
            <div className="mt-3 text-center">
              <Link to="/olvidaste" className="text-link">
                <br></br>¿Olvidaste tu contraseña?
              </Link>
              <br />
              <Link to="/registro" className="text-link">
                <br></br>¿No tienes cuenta? Regístrate aquí
              </Link>
            </div>
          </form>
          <button className="btn btn-secondary mt-3" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
