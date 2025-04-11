import { useState } from "react";
import GameOver from "./GameOver.tsx";
import { characterArray } from "./handleImages";

interface CardProps {
  src: string;
  name: string;
  onClick: () => void;
}

function Card({ src, name, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export type characterArray = {
  char: string;
  name: string;
  selected: boolean;
}[];

interface GameBoardProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  bestScore: number;
  setBestScore: React.Dispatch<React.SetStateAction<number>>;
}

function GameBoard({
  score,
  setScore,
  bestScore,
  setBestScore,
}: GameBoardProps) {
  const [arrayLength, setArrayLength] = useState(4);
  const [charArray, setCharArray] = useState(characterArray.slice(0, 4));
  const [gameOver, setGameOver] = useState(false);

  function shuffleArray(arr: characterArray): characterArray {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleCardClick(name: string) {
    const newArray = charArray.map((image) => {
      if (image.name === name) {
        if (image.selected === true) {
          if (score > bestScore) {
            setBestScore(score);
          }
          setGameOver(true);
        } else {
          setScore(score + 1);
          return { ...image, selected: !image.selected };
        }
      }
      return image;
    });

    if (newArray.every((image) => image.selected)) {
      if (arrayLength === 18) {
        setGameOver(true);
      }
      const newLength = arrayLength + 2;
      const newArray = shuffleArray(characterArray.slice(0, newLength));
      setCharArray(newArray);
      setArrayLength(newLength);
    } else {
      setCharArray(shuffleArray(newArray));
    }
  }

  function restart() {
    setScore(0);
    setCharArray(characterArray.slice(0, 4));
    setGameOver(false);
    setArrayLength(4);
  }

  return (
    <div className={`gameBoard${arrayLength.toString()}`}>
      {charArray.map((image) => (
        <Card
          key={image.name}
          src={image.char}
          name={image.name}
          onClick={() => handleCardClick(image.name)}
        />
      ))}
      {gameOver && (
        <GameOver score={score} handleButtonClick={() => restart()} />
      )}
    </div>
  );
}
export { GameBoard };
