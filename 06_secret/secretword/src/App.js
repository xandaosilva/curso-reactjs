import { useCallback, useEffect, useState } from "react";

import StartScreen from './components/StartScreen';
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { wordsList } from "./data/words";

import './App.css';

const stages = [{ id: 1, name: "start" }, { id: 2, name: "game" }, { id: 3, name: "end" }];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;