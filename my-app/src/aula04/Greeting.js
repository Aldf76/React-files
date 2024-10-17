import React from "react";
import PropTypes from 'prop-types';

//componente funcional que aceita props

const Greeting = ({name, age, isStudent, telefone, endereco}) => (
    <div>
        <h1>Hello, {name} !</h1>
        <p>Age: {age}</p>
        <p>Phone: {telefone}</p>
        <p>Endereço {endereco}</p>
        <p>{isStudent ? 'You are a student.' : 'You are not a student'}</p>
    </div>
)

//DEFININDO PROPTYPES PARA VALIDAÇÃO
Greeting.PropTypes = {
    name: PropTypes.string.isRequired, //Obrigatório
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool, // opcional
    telefone: PropTypes.number.isRequired,
    endereco: PropTypes.string,
}

//valores padroes
Greeting.defaultProps = {
    isStudent : false
};

export default Greeting;
