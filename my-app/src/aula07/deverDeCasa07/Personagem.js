import React from 'react';
import { Button } from "@mui/material";  // Importando Material UI Button

function Personagem({ personagem, dispatch }) {
  // Incrementa o contador sempre que um detalhe é visualizado
  const handleViewDetails = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div className="personagem-card">
      <h2>{personagem.name}</h2>
      <p>Height: {personagem.height}</p>
      <p>Mass: {personagem.mass}</p>
      <p>Hair Color: {personagem.hair_color}</p>
      <p>Skin Color: {personagem.skin_color}</p>
      <Button variant="outlined" onClick={handleViewDetails}>
        Ver Detalhes
      </Button>
    </div>
  );
}

export default Personagem;
