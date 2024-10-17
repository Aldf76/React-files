import React, {useState}  from "react";

const TrocaTexto = () => {
    const [nome, setNome] = useState("");
    const trocar = () => {
        setNome("João");
    };
 
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <button onClick={trocar}>Trocar o texto</button>
        </div>
    );
};

export default TrocaTexto;