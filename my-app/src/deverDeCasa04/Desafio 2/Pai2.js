import React, {useState, useEffect} from "react";
import Filho2 from './Filho2';

function Pai2(){
    //iniciar o estado
    const [tarefas, setTarefa] = useState([]);
    //função para adicionar nova tarefa à lista
    const adicionarTarefa = (novaTarefa) => {
        // spread operator(...) usado para expandir elementos de um array.
        //aqui estamos criando uma cópia do array tarefas e adicionando a nova tarefa ao fim dele
        setTarefa([...tarefas, novaTarefa]);
    };

    // Trabalhando com useEffect para exibir um log quando a lista de tarefas mudar
    useEffect(() =>{
        console.log("A lista de tarefas foi atualizada com sucesso: ", tarefas);
    }, [tarefas]);  // o efeito será acionado quando atualizarmos quando a lista 'tarefas' mudar

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            {/*Renderiza o componente Filho e passa as props necessárias*/}
            <Filho2 tarefas={tarefas} adicionarTarefa = {adicionarTarefa} />

            {/*Exibe a lista de tarefas */}
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pai2;