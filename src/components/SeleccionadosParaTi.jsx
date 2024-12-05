import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/SeleccionadosParaTi.css';

function SeleccionadosParaTi() {
  return (
    <section className="seleccionados-para-ti">
      <h3 className="text-center mb-4">Seleccionados para ti</h3>
      <Row className="g-3">
        {[1, 2, 3].map((item) => (
          <Col key={item} xs={12} md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Restaurante {item}</Card.Title>
                <Card.Text>Una breve descripción del restaurante {item}.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SeleccionadosParaTi;