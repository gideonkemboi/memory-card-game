import { useState } from "react";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";
import "/src/styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <div className="logo">
          <p>Memory Card Game</p>
        </div>
        <div className="scores">
          <Scores />
        </div>
      </div>
      <div className="gameBoardContainer">
        <GameBoard />
      </div>
    </>
  );
}

export default App;
