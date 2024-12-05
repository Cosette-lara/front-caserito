import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/PieDePagina.css';

function PieDePagina() {
  return (
    <footer className="footer p-4">
      <Row>
        <Col xs={12} md={4} className="mb-3">
          <h6>¿Quiénes somos?</h6>
          <p>Información sobre la empresa.</p>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <h6>Legal</h6>
          <p>Términos y condiciones</p>
        </Col>
        <Col xs={12} md={4} className="mb-3">
          <h6>Contacto</h6>
          <p>contacto@caserita.com</p>
        </Col>
      </Row>
    </footer>
  );
}

export default PieDePagina;