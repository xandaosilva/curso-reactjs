import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    useEffect(() => {
        console.log("Estou sendo executado!!!");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeSomething}>Alterar número</button>
            <hr />
        </div>
    );
}

export default HookUseEffect;