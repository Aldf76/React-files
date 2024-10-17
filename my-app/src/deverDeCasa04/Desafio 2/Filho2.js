import React, {useState} from "react";
import PropTypes from 'prop-types';

function Filho2({tarefas, adicionarTarefa }) {
    // Estado local para armazenar o valor do input 
    const [novaTarefa, setNovaTarefa] = useState('');

    //função para lidar com a mudança no imput
    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value);
    };

    //Função para adicionar a nova tarefa ao ser clicado no botão
    const handleAdicionarTarefa = () => {
        if(novaTarefa.trim() !== '') {
        adicionarTarefa(novaTarefa); //chama a função passada pelo Pai
        setNovaTarefa(''); // Limpa p input
    }
    };

    return(
        <div>
            <input 
            type="text" 
            value={novaTarefa} 
            onChange={handleInputChange} 
            placeholder="Digite uma nova tarefa"/>
            <button onClick={handleAdicionarTarefa}>Adicionar nova tarefa</button>
        </div>
    );
}

//Validação usando PropTypes

Filho2.propTypes = {
    tarefas: PropTypes.array.isRequired, // tarefas DEVE ser um array
    adicionarTarefa: PropTypes.func.isRequired //
}


export default Filho2;