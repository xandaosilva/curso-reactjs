import { useReducer } from 'react'

const HookUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar o valor!</button>
            <hr />
        </div>
    );
}

export default HookUseReducer;