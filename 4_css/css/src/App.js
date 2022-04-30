import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>Esse parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
