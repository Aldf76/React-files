import React, {useState, useEffect} from 'react';

function Personagem ({id}){
// vamos criar um estado que armazene os dados do personagem
const [personagem, setPersonagem] = useState({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: ''
});

// usar useEffect para buscar os dados da api.

 useEffect(() => { // lidando com requisições de forma assíncrona usando async/await e lidando com possíveis erros através do try/catch. 
    const fetchPersonagem = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`); // faz a requisição
        const data = await response.json(); // taz os dados na resposta json
        setPersonagem({  // filtra os dados, encapsulando-os.
          name: data.name, 
          height: data.height,
          mass: data.mass,
          hair_color: data.hair_color,
          skin_color: data.skin_color,
        });
      } catch (error) {
        console.error('Erro ao buscar o personagem:', error);
      }
     };


     fetchPersonagem();
   }, [id]); // o useEffect será disparado de novo quando a essa prop mudar

   //aqui retornamos as informações que a api trouxe



   return (
    <div className='personagem-card'>
        <h2>{personagem.nome}</h2>
        <p>Name : {personagem.name}</p>
        <p>Height : {personagem.height}</p>
        <p>Mass: {personagem.mass}</p>
        <p>Hair_color : {personagem.hair_color}</p>
        <p>Skin_color : {personagem.skin_color}</p>

    <div className='personagem-list'>

    </div>
    
    </div>

   )
   
 }
 
 export default Personagem;