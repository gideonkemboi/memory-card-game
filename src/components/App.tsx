import { useState } from "react";
import { characterArray } from "./handleImages";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";
import { GameOver } from "./GameOver";
import "/src/styles/App.css";

function App() {
  const [arrayLength, setArrayLength] = useState(4);
  const [charArray, setCharArray] = useState(characterArray.slice(0, 4));
  const [gameOver, setGameOver] = useState(false);
  let [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function restart() {
    setScore(0);
    setCharArray(characterArray.slice(0, 4));
    setGameOver(false);
    setArrayLength(4)
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
        <h3>Don't click on the same character more than once in each level!</h3>
        <GameBoard
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          gameOverComponent={
            <GameOver score={score} handleButtonClick={restart} />
          }
          characterArray={characterArray}
          charArray={charArray}
          setCharArray={setCharArray}
          arrayLength={arrayLength}
          setArrayLength={setArrayLength}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      </div>
    </>
  );
}

export default App;
