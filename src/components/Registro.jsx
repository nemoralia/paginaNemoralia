import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

function Registro() {
  return (
    <div className="container-full-height">
      <div className="w-50">
        {/* CUADRO ROJO */}
        <div className="border red-box">
          <h2 className="text-center">¡Crea tu cuenta! <br/>Favor llenar el formulario.</h2>
        </div>
        {/* CUADRO NEGRO */}
        <div className="border shadow black-box">
          <form className="text-center">
            <div className="mb-3-registro">
              <label htmlFor="inputEmail" className="form-label form-label-white registro-label">Usuario<br /></label>
              <input type="email" className="form-control registro-input-center registro-input" id="inputEmail" placeholder="INGRESA TU USUARIO" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputPassword" className="form-label form-label-white registro-label">Contraseña<br /></label>
              <input type="password" className="form-control registro-input-center registro-input" id="inputPassword" placeholder="INGRESA TU CONTRASEÑA" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputConfirmPassword" className="form-label form-label-white registro-label">Confirmar Contraseña<br /></label>
              <input type="password" className="form-control registro-input-center registro-input" id="inputConfirmPassword" placeholder="CONFIRMA TU CONTRASEÑA" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputName" className="form-label form-label-white registro-label">Nombre<br /></label>
              <input type="text" className="form-control registro-input-center registro-input" id="inputName" placeholder="INGRESA TU NOMBRE" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputLastName" className="form-label form-label-white registro-label">Apellido<br /></label>
              <input type="text" className="form-control registro-input-center registro-input" id="inputLastName" placeholder="INGRESA TU APELLIDO" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputPhone" className="form-label form-label-white registro-label">Teléfono<br /></label>
              <input type="tel" className="form-control registro-input-center registro-input" id="inputPhone" placeholder="INGRESA TU TELÉFONO" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputAddress" className="form-label form-label-white registro-label">Dirección<br /></label>
              <input type="text" className="form-control registro-input-center registro-input" id="inputAddress" placeholder="INGRESA TU DIRECCIÓN" />
            </div>
            <div className="mb-3-registro">
              <label htmlFor="inputDob" className="form-label form-label-white registro-label">Fecha de Nacimiento<br /></label>
              <input type="date" className="form-control registro-input-center registro-input" id="inputDob" />
            </div>
            <button type="submit" className="btn btn-secondary">Registrar</button>
            <div className="mt-3 text-center">
              <Link to="/login" className="text-link"><br></br>¿Ya tienes cuenta? Inicia sesión aquí.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;