import React, { useState } from 'react'

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(20);

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(30)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData;