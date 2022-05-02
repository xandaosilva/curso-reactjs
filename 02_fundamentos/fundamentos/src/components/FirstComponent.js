import React from 'react'
import MyComponent from './MyComponent';

const FirstComponent = () => {
    // Primeiro comentário

    return (
        <div>
            {/* Segundo comentário */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Conteúdo do componente</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;