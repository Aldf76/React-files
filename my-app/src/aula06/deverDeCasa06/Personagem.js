import React from 'react';

function Personagem({ personagem }) {
  // Apenas recebe as informações dos personagens e as exibe. Cortei o contato com a api
  return (
    <div className="personagem-card">
      <h2>{personagem.name}</h2>
      <p>Height: {personagem.height}</p>
      <p>Mass: {personagem.mass}</p>
      <p>Hair Color: {personagem.hair_color}</p>
      <p>Skin Color: {personagem.skin_color}</p>
    </div>
  );
}
 export default Personagem;