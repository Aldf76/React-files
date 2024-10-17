import React, {useState, useEffect} from "react";

const Timer = () => {
    const[count, setCount ] = useState(0);

    //useEffect para atualizar o título da página a cada mudança no count
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);//executa apenas quando 'count' muda


    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> Increment</button>
        </div>
    );
};

export default Timer;