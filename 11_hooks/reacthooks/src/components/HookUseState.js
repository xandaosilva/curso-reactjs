import { useState } from "react";

const HookUseState = () => {
    let userName = "João";
    const [name, setName] = useState("Maria");
    const [age, setAge] = useState(18);

    const changeNames = () => {
        userName = "João da Silva";
        setName("Maria Eduarda");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(age);
    }

    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Alterar nomes</button>
            <hr />
            
            <h2>useState e inputs</h2>
            <p>Digite a sua idade</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos</p>
            <hr />
        </div>
    );
}

export default HookUseState;