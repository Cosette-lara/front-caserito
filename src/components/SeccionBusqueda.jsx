import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/SeccionBusqueda.css';

function SeccionBusqueda() {
  return (
    <section className="seccion-busqueda p-4 text-center">
      <h2>Descubre el mejor Restaurante de tu zona</h2>
      <div className="d-flex justify-content-center mt-3">
        <input type="text" className="form-control me-2" placeholder="Buscar..." style={{ maxWidth: '400px' }} />
        <Button variant="outline-success">Buscar</Button>
      </div>
    </section>
  );
}

export default SeccionBusqueda;