// este componente será responsável por manter o estado da contagem e as funções que a manipulam //
import React, {useState} from 'react';
import Filho from './Filho';

const Pai = () => {
    // é preciso declarar o estado com seu valor inicial
    const [contador, setContador] = useState(0);

    //vamos estabelecer as funções de incrementar e decrementar, elas ALTERAM o estado
    const incrementar = () =>{
        setContador(contador + 1); //atualiza o estado e vai adicionar + 1;
    };
    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <Filho contador={contador} incrementar = {incrementar} decrementar = {decrementar} />
        </div>
    )

}

export default Pai;