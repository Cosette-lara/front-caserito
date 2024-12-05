import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Encabezado.css';

import logo from '../assets/images/logo.png';

function Encabezado() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <div className="logo">
        <img src={logo} alt="Logo Caserita" />
      </div>
      <nav className="d-flex gap-3">
        <a href="#">Registrar mi restaurante</a>
        <Button variant="success">Iniciar sesión</Button>
      </nav>
    </header>
  );
}


export default Encabezado;

