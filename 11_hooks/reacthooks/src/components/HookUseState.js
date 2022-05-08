import { useState } from "react";

const HookUseState = () => {
    let userName = "João";
    const [name, setName] = useState("Maria");

    const changeNames = () => {
        userName = "João da Silva";
        setName("Maria Eduarda");
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Alterar nomes</button>
            <hr />
        </div>
    );
}

export default HookUseState;