import React from "react";

const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Ativou o evento !");
    }

    const renderSomething = (x) => {
        if(x)
            return <h1>Rederizando isso</h1>
        else
            return <h1>Também posso renderizar isso</h1>
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou aqui também !")}>Clique aqui também</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir :)");
                    }
                }}>
                    Clique aqui por favor !
                </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
}

export default Events;