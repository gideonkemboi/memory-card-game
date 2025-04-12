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
    <div
      className="card group relative inline-block h-37.5 w-37.5 cursor-pointer rounded-sm"
      onClick={onClick}
    >
      <img
        src={src}
        alt={name}
        className="ease h-full w-full rounded-sm object-cover object-top filter transition duration-300 group-hover:brightness-50"
      />
      <p className="ease absolute top-[70%] w-full transform-[translate-1/2] text-center text-white opacity-0 italic transition-opacity delay-100 group-hover:opacity-[1]">
        {name}
      </p>
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

  const gridColsClass: string = {
    4: "grid-cols-2",
    6: "grid-cols-3",
    8: "grid-cols-4",
    10: "grid-cols-5",
    12: "grid-cols-4",
    16: "grid-cols-4",
    18: "grid-cols-6",
  }[arrayLength] as string;

  return (
    <div className={`grid gap-2.5 ${gridColsClass}`}>
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
