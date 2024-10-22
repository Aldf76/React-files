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


function Grid(){

const  [id, setId] = useState(''); //estado do id, string vazia, pois vai ser preenchido num input


//vAI ATUALIZAR O ID COM BASE NO INPUT, MUDANDO O ESTADO
const handleInputChange = (event) => {
    setId(event.target.value); //vai armazenar o valor do input
}

//Função para renderizar um novo Personagem ao clicar no botão
const handleSubmit = () => {
if (!id){
 alert("Por favor, insira um id válido")
 return; // return para evitar que o código continue .
}
};

    return(
        <div className="grid-container">
            <h1>Buscar Personagem</h1>
            <input
             type="text"
             value={id} 
             onChange={handleInputChange} 
             placeholder="Digite aqui o ID do Personagem"
             />
             <button onClick={handleSubmit}>Buscar</button>

        <div className="grid-container">
            {id && <Personagem key={id} id={id}/> }  {/* Aprendi que vai renderizar o compononente com o id */}
        </div>
        </div>  

        

    )
}


export default Grid;