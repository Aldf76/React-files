import React from "react";

const formulario = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        // evita que o submit limpe o input 
        e.preventDefault(); 
        console.log('Nome: ', inputValue);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Nome"/>
            <button type="submit">Enviar</button>
        </form>
    );

}

export default formulario;