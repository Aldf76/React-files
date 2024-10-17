import React from 'react';

const Soma = (props) => {
    const { num1, num2 } = props;
    const soma = num1 + num2;

    return (
        <div>
            <h2>A soma de {num1} + {num2} é: {soma}</h2>
        </div>
    );
};

export default Soma;
