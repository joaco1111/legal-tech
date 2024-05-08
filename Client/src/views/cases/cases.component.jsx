import './cases.module.css';
import React from 'react';

function Cases() {
  return (
    <div>
      <div>
        <p>Casos</p>
        <select>
          <option>Casos por cliente</option>
        </select>
        <select>
        <option>Casos por cotización</option>
        </select>
        <select>
        <option>Casos por abogado</option>
        </select>
        <select>
        <option>Casos por estado</option>
        </select>
        <select>
        <option>Casos por tipo</option>
        </select>
        <button>Todos los casos</button>
      </div>
    </div>
  )
}

export default Cases