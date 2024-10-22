import React, {useState} from "react";
import PropTypes from 'prop-types';

function Filho2({tarefas, adicionarTarefa }) {
    // Estado local para armazenar o valor do input 
    const [novaTarefa, setNovaTarefa] = useState('');

    //função para lidar com a mudança no imput
    const handleInputChange = (event) => { // event é um parâmetro. é um objeto de evento que o navegador gera automaticamente toda vez que um evento ocorre neste caso, a mudança no campo de input.

        setNovaTarefa(event.target.value); /*event.target refere-se ao elemento HTML que disparou o evento
         (neste caso, o campo de input). event.target.value acessa o valor atual do campo de input, ou seja, o texto que o usuário acabou de digita */
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
            onChange={handleInputChange}  // Usando React, onChange é utilizado para capturar o valor
            // que o usuário digita ou altera em um campo de input e, a partir disso, atualizar o estado do componente
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


/*

function App() {
  return (
  <div className='App'>
    <header className="App-header">
      <img src={logo} className="App-logo" alt='logo'/>

      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      <h1>Lista de Tarefas com sincronização</h1>      
      <Pai2/>
    

    </header>
    
  </div>
  )
}

*/

export default Filho2;