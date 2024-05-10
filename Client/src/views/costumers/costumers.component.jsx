import React from 'react';
import './costumers.module.css';

function Costumers(props) {
  const { nombres, apellidos, cedula, email, direccion, celular, ciudad, codigo_postal, pais } = props.cliente;

  return (
    <div>
      <div>
        <h1>Detalle del Cliente</h1>
        <p><strong>Nombre(s):</strong> {nombres}</p>
        <p><strong>Apellido(s):</strong> {apellidos}</p>
        <p><strong>Número de cédula:</strong> {cedula}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Dirección:</strong> {direccion}</p>
        <p><strong>Celular:</strong> {celular}</p>
        <p><strong>Ciudad:</strong> {ciudad}</p>
        <p><strong>Código Postal:</strong> {codigo_postal}</p>
        <p><strong>País:</strong> {pais}</p>
      </div>
    </div>
  );
}

export default Costumers;
