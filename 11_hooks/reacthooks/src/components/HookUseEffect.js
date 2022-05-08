import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    useEffect(() => {
        console.log("Estou sendo executado!!!");
    });
    
    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    useEffect(() => {
        console.log("Serei executado apenas uma vez!!!");
    }, []);

    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0)
            console.log("Sou executado apenas quando o anotheNumber é executado!!!");
    }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeSomething}>Alterar número</button>
            <p>Outro número: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Alterar outro número</button>
            <hr />
        </div>
    );
}

export default HookUseEffect;