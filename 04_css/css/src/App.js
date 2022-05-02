import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [nome] = useState("teste");
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>Esse parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* Inline CSS dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={nome === "teste" ? ({color: "green", backgroundColor: "black"}) : null}>Teste nome</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
