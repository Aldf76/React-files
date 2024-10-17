import React, {useState} from "react";

const MudancaCor = () => {
const [cor, setCor] = useState('white');

const cores = ['red', 'green', 'blue', 'yellow', 'purple'];

const mudaCor = () => {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const novaCor = cores[indiceAleatorio];
    setCor(novaCor);
};

return(
    <div style={{backgroundColor: cor}}>
        <button onClick={mudarCor}>Mudar Cor</button>
    </div>
);

};

export default MudancaCor