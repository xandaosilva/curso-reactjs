import React from "react";

const TemplateExpressions = () => {

    const name = "Alexandre";
    const data = {
        age: 29,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
}

export default TemplateExpressions;