import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import '../styles/FiltradoRestaurantes.css';

const FiltradoRestaurantes = ({ setRestaurantes }) => {
  const [tipo, setTipo] = useState('');
  const [favoritos, setFavoritos] = useState(false);

  const handleFiltrar = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/restaurantes', {
        params: {
          tipo,
          favoritos,
        },
      });
      setRestaurantes(response.data);
    } catch (error) {
      console.error('Error al obtener restaurantes:', error);
    }
  };

  return (
    <div className="filtrado-container">
      <FormControl variant="outlined" className="filtrado-form-control">
        <InputLabel>Tipo de Restaurante</InputLabel>
        <Select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          label="Tipo de Restaurante"
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="italiano">Italiano</MenuItem>
          <MenuItem value="japones">Japonés</MenuItem>
          <MenuItem value="mexicano">Mexicano</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={favoritos}
            onChange={(e) => setFavoritos(e.target.checked)}
            color="primary"
          />
        }
        label="Solo Favoritos"
      />
      <Button variant="contained" color="primary" onClick={handleFiltrar} className="filtrar-button">
        Filtrar
      </Button>
    </div>
  );
};

export default FiltradoRestaurantes;