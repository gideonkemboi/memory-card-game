import { useState } from "react";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";
import "/src/styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div className="header">
        <div className="logo">
          <p>Memory Card Game</p>
        </div>
        <div className="scores">
          <Scores score={score} bestScore={bestScore} />
        </div>
      </div>
      <div className="gameBoardContainer">
        <h3>Don't click on the same character more than once in each level!</h3>
        <GameBoard
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </div>
    </>
  );
}

export default App;
