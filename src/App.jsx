import React from 'react';
import { Container } from 'react-bootstrap';
import Encabezado from './components/Encabezado';
import SeccionBusqueda from './components/SeccionBusqueda';
import SeleccionadosParaTi from './components/SeleccionadosParaTi';
import RestaurantesPopulares from './components/RestaurantesPopulares';
import AcercaDeCaserita from './components/AcercaDeCaserita';
import UneteACaserita from './components/UneteACaserita';
import PieDePagina from './components/PieDePagina';
import './index.css';
import './app.css';

function App() {
  return (
    <Container fluid className="p-0">
      <Encabezado />
      <SeccionBusqueda />
      <SeleccionadosParaTi />
      <RestaurantesPopulares />
      <AcercaDeCaserita />
      <UneteACaserita />
      <PieDePagina />
    </Container>
  );
}

export default App;
