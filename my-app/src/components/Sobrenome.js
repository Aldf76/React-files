import React from 'react';

const Sobrenome = (props) => {
    return (
        <div>
        <h1>{props.nome +  ' ' + props.sobrenome} </h1>
    </div>
    );
};

export default Sobrenome;