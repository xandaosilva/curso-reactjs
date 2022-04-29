import React from "react";

const Challenge = () => {

    const a = 20;
    const b = 2;

    const handleClickSum = () =>{
        console.log(a + b);
    }

    return(
        <div>
            <p>Valor de a: {a}</p>
            <p>Valor de b: {b}</p>
            <button onClick={handleClickSum}>Somar</button>
        </div>
    );
}

export default Challenge;