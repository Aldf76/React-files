import React, {useState} from "react";
import Personagem from "./Personagem";

<style>
  {`
    input, button {
      padding: 10px;
      margin: 10px 0;
      font-size: 16px;
    }
  `}
</style>


function Grid (){
  // vamos criar um estado que armazene os dados do personagem
  const [personagem, setPersonagem] = useState([]); // vamos armazenar a lista de personagens
  
    // função para buscar todos os personagens 
    // Eu retirei o useEffect pois toda a lógica da requisição funciona com o handleSubmit, obdecendo pressionar do botao
    // No caso de utilizar o useEffect, seria em uma ocasião em que eu gostaria que a página já renderizasse com a lista pronta
      const handleSubmit = async () => {
        try {
          // fetch em programação refere-se a una função que permite fazer requiições assincronas para obter recursos como de uma api
          const response = await fetch(`https://swapi.dev/api/people`); // faz a requisição de todos os personagens da api, nao do id
          const data = await response.json(); // taz os dados na resposta json
          setPersonagem(data.results); // armazena a lista de personagem. agora é um array
        } catch (error) {
          console.error('Erro ao buscar os personagem:', error);
        }
       };
  
     return (
      <div className='grid-personagem'>
          <h1>Buscar todos os personagens</h1>
          <button onClick={handleSubmit}>Buscar</button>
  
          <div className="lista-personagem">
          {personagem.map((personagem, index) => (
            <Personagem key={index} personagem={personagem} /> // Passa cada personagem individualmente
          ))}
        </div>
  
      </div>
      
  
     )
     
   }


export default Grid;