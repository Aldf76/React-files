import React from 'react';

const Child = ({ onButtonClick }) => {
    return (
        <button onClick={onButtonClick}>Click me!</button>
    );
};

export default Child;
