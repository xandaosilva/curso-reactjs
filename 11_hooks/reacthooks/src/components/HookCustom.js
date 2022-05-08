import { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

const HookCustom = () => {
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

    return (
        <div>
            <h2>Custom Hook</h2>
            <p>Atual: {number}</p>
            <p>Valor anterior: {previousValue}</p>
            <button onClick={() => setNumber(Math.floor(Math.random() * 10))}>Alterar</button>
            <hr />
        </div>
    );
}

export default HookCustom;