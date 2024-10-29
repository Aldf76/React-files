import React from   'react';    

const listaNomes = () => {
    const nomes = ['Maria', 'Julia','Elenna', 'Ana Beatriz','Mariana']
    return (
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
                </ul>
            );
        }

export default listaNomes;