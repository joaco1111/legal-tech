import './detail.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Detail() {
  const usuario =  {}

  return (
    <div>
      <div>
        <p>Detail</p>
      </div>
      <div key={usuario.cedula}></div>
      <div>
            <h4>Cedula: {usuario?.cedula}</h4>
            <h4>Matricula: {usuario?.matricula}</h4>
            <h4>Nombre: {usuario?.nombre}</h4>
            <h4>Apellido: {usuario?.apellido}</h4>
            <h4>Correo: {usuario?.correo}</h4>
            <h4>Telefono: {usuario?.telefono}</h4>
            <h4>Direccion:</h4>
            <h4>Número: {usuario?.numero}</h4>
            <h4>Código Postal: {usuario?.codigo_postal}</h4>
            <h4>Ciudad: {usuario?.ciudad}</h4>
            <h4>Pais: {usuario?.pais}</h4>
          </div>
          <Link to='/home'>
          <button >Volver</button>
          </Link>
    </div>
  )
}

export default Detail