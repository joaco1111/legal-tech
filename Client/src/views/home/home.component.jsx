import './home.module.css';
import React from 'react';
import { Link,  } from 'react-router-dom';

function Home() {
  
    return (
      <div>
        <Link to="/home/detail">
          <button>Datos Personales</button>
        </Link>
        <Link to="/home/cases/:id">
          <button>Casos</button>
        </Link>
        <Link to="/home/costumers/:id">
          <button>Clientes</button>
        </Link>
        <Link to="/home/lawyers/:id">
          <button>Abogados</button>
        </Link>
        <Link to="/home/documents/:id">
          <button>Documentos</button>
        </Link>
        <Link to="/home/diary">
          <button>Agenda</button>
        </Link>
        <Link to="/home/payments">
          <button>Pagos</button>
        </Link>
        <Link to="/home/consultation">
          <button>Consultas</button>
        </Link>
        <Link to="/home/statistics">
          <button>Estadisticas</button>
        </Link>
        <br/>
        <br/>
        <Link to="/">
          <button>Salir</button>
        </Link>

      </div>
    );
  };
  

export default Home