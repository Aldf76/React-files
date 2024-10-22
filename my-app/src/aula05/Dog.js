import React, { useState, useEffect } from 'react';
import DogCards from './DogCards';
import './DogCards.css';

function Dogs(){
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true); 
    const [isVisible, setVisible] = useState(false)
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random') //INSERIR UM HTTP AQUI DEPOIS
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message);
            setLoading(false);
            setVisible(false);
        })
        .catch(error => setVisible(true));
    }, []);

    return (
        <div className="app">
           {loading ? <p>Loading...</p> : <DogCards imageUrl={dogImage}
           isVisible={isVisible}/>}
        </div>
    );
}

export default Dogs;