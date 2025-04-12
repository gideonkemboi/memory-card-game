import { useState } from "react";
import { Scores } from "./Scores";
import { GameBoard } from "./GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <div className="flex items-center px-5 py-0">
        <div className="logo">
          <p>Memory Card Game</p>
        </div>
        <div className="ml-auto flex">
          <Scores score={score} bestScore={bestScore} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
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
