import { useState } from "react";
import { characterArray } from "./handleImages";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import "/src/styles/App.css";

function App() {
  const [charArray, setCharArray] = useState(characterArray);
  const [gameOver, setGameOver] = useState(false);
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

  function restart() {
    setScore(0);
    setCharArray(characterArray);
    setGameOver(false);
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
        <h3>Don't click on the same character more than once!</h3>
        <GameBoard
          incrementScore={incrementScore}
          handleBestScore={handleBestScore}
          gameOverComponent={<GameOver score={score} handleButtonClick={restart} />}
          charArray={charArray}
          setCharArray={setCharArray}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      </div>
    </>
  );
}

export default App;
