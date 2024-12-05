import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/RestaurantesPopulares.css';

function RestaurantesPopulares() {
  return (
    <section className="restaurantes-populares">
      <h3 className="text-center mb-4">Restaurantes populares</h3>
      <Row className="g-3">
        {[1, 2, 3].map((item) => (
          <Col key={item} xs={12} md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Popular Restaurante {item}</Card.Title>
                <Card.Text>Una breve descripción del restaurante popular {item}.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default RestaurantesPopulares;