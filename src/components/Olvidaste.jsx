import React from 'react';
import { Link } from 'react-router-dom';
import './Olvidaste.css';

function Olvidaste() {
  return (
    <div className="container-full-height">
      <div className="w-50">
        <div className="border red-box">
          <h2 className="text-center">Recupera tu contraseña</h2>
        </div>
        <div className="border shadow black-box">
          <form className="text-center">
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label form-label-white">Correo Electrónico<br /></label>
              <input type="email" className="form-control input-center" id="inputEmail" placeholder="INGRESA TU CORREO ELECTRÓNICO" />
            </div>
            <button type="submit" className="btn btn-secondary">Enviar</button>
          </form>
          <div className="mt-3 text-center">
            <Link to="/login" className="btn btn-primary"><br></br>Regresar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Olvidaste;