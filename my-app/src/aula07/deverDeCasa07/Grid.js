import React, { useState } from "react";
import Personagem from "./Personagem";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";  // Importando Material UI Button
import CircularProgress from "@mui/material/CircularProgress";  // Importando Material UI CircularProgress

function Grid() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para verificar se está carregando
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);  // Inicia o loading
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPersonagens(data.results);
    } catch (error) {
      console.error("Erro ao buscar os personagens:", error);
    } finally {
      setLoading(false);  // Finaliza o loading
    }
  };

  return (
    <div className="grid-personagem">
      <h1>Buscar todos os personagens</h1>
      <Button variant="contained" onClick={handleSubmit}>Buscar</Button>

      <div className="lista-personagem">
        {loading ? (
          <CircularProgress />  // Exibe o progresso de carregamento
        ) : (
          personagens.map((personagem, index) => (
            <Personagem key={index} personagem={personagem} dispatch={dispatch} />
          ))
        )}
      </div>
    </div>
  );
}

export default Grid;
