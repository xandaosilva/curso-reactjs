import { useState, useEffect, useRef } from 'react'

const HookUseRef = () => {
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    });

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou o componente: {numberRef.current} vezes</p>
            <p>Contador A: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Contador B: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            <hr />
        </div>
    );
}

export default HookUseRef;