import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/UneteACaserita.css';

function UneteACaserita() {
  return (
    <section className="unete-a-caserita p-5 text-center">
      <h3>ÚNETE A CASERITA</h3>
      <p>Come, ahorra y disfruta</p>
      <Button variant="outline-light" className="me-2">Regístrate ahora</Button>
      <Button variant="outline-light">Iniciar sesión</Button>
    </section>
  );
}

export default UneteACaserita;