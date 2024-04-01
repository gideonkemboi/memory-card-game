import { useState } from "react";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";
import "/src/styles/App.css";

function App() {
  let [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
    console.log(score);
  }

  function handleBestScore() {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

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
        <GameBoard
          incrementScore={incrementScore}
          handleBestScore={handleBestScore}
        />
      </div>
    </>
  );
}

export default App;
