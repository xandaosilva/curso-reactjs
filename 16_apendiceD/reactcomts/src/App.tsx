// importação de componentes
import FirstComponent from "./components/FirstComponent";

function App() {

  // Variáveis
  const name: string = "Alexandre";
  const age: number = 30;
  const isWorking: boolean = true;

  // funções
  const userGreeting = (name: string): string => `Olá, ${name} !`;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking ? (<p>Está trabalhando</p>) : (<p>Não está trabalhando</p>)}
      <hr />
      <h3>{userGreeting(name)}</h3>
      <hr />
      <FirstComponent />
    </div>
  );
}

export default App;
