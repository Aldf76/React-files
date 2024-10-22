import React from 'react';
import './DogCards.css';
function DogCards({ imageUrl, isVisible }){
    const errorMsg = 'Um erro ocorreu ao buscar a imagem do cachorro';

return(
    <div>
        {isVisible ? errorMsg :
    <div className='card'>
        <img src={imageUrl} alt="Random Dog" className='dog-image'/>
        <div className='card-content'>
            <h2>Random Dog</h2>
            <p>Este é um cachorro gerado aleatoriamente</p>
        </div>
    </div>
        }
    </div>
);
}

export default DogCards