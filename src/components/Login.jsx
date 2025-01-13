import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="container-full-height">
      <div className="w-50">
        {/* CUADRO ROJO */}
        <div className="border red-box">
          <h2 className="text-center">¡Hola de nuevo! <br />Inicia sesión para continuar.</h2>
        </div>
        {/* CUADRO NEGRO */}
        <div className="border shadow black-box">
          <form className="text-center">
            <div className="mb-3-login">
              <label htmlFor="exampleInputEmail1" className="form-label form-label-white">Usuario<br /></label>
              <input type="email" className="form-control input-center login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="INGRESA TU USUARIO" />
            </div>
            <div className="mb-3-login">
              <label htmlFor="exampleInputPassword1" className="form-label form-label-white">Contraseña<br /></label>
              <input type="password" className="form-control input-center login-input" id="exampleInputPassword1" placeholder="INGRESA TU CONTRASEÑA" />
            </div>
            <button type="submit" className="btn btn-secondary">Iniciar sesión</button>
            <div className="mt-3 text-center">
              <Link to="/olvidaste" className="text-link"><br></br>¿Olvidaste tu contraseña?</Link><br />
              <Link to="/registro" className="text-link"><br></br>¿No tienes cuenta? Regístrate aquí</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;