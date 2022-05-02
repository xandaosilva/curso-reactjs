import React from 'react';

import "./MyComponent.css";

const MyComponent = () => {
    return (
        <div>
            <h1>CSS de componente</h1>
            <p>Esse é o parágrafo do componente.</p>
            <p className="my-comp-paragraph">Esse parágrafo também é do componente.</p>
        </div>
    );
}

export default MyComponent;