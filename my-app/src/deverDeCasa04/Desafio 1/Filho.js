import React, { useEffect } from "react";
import Proptypes from 'prop-types';
import PropTypes from "prop-types";

function Filho({contador, incrementar, decrementar}){
    // Usaremos aqui o useEffect para exibir o log sempre que o contador mudar
    useEffect(() =>{
        console.log(`O valor da contagem mudou para: ${contador}`)
    }, [contador]); // o useEffect é acionado sempre que o 'contador' mudar

    return (
        <div>
            <h2>Contagem atual: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>

        </div>
    );
}

Filho.propTypes = {
    contador : PropTypes.number.isRequired, // contador deve ser um número
    increment: PropTypes.func.isRequired, // 'incrementar' deve ser uma função
    decrementar: PropTypes.func.isRequired //'decrementar' deve ser uma função
}   

export default Filho;