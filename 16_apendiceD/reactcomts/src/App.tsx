import { createContext } from "react";

// importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";
import Context from "./components/Context";

// type
type textOrNull = string | null;

// context
interface IAppContext { language: string, framework: string, projects: number };

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // Variáveis
  const name: string = "Alexandre";
  const age: number = 30;
  const isWorking: boolean = true;

  // funções
  const userGreeting = (name: string): string => `Olá, ${name} !`;

  // type
  const myText: textOrNull = "Tem algum texto aqui.";
  let mySecondText: textOrNull = null;
  mySecondText = "Olá pessoas";

  // context
  const contextValue: IAppContext = { language: "JavaScript", framework: "Express", projects: 5 };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking ? (<p>Está trabalhando</p>) : (<p>Não está trabalhando</p>)}
        <hr />
        <h3>{userGreeting(name)}</h3>
        <hr />
        <FirstComponent />
        <hr />
        <SecondComponent name="Segundo" />
        <hr />
        <Destructuring title="Curso React" content="Aprendendo React" commentsQty={3} tags={["html", "react", "typeScript"]} category={Category.TS} />
        <hr />
        <State />
        <hr />
        <p>{myText}</p>
        <p>{mySecondText}</p>
        <hr />
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
