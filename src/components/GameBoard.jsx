import React, { useState, useEffect } from "react";
import { characterArray } from "./handleImages";

function Card({ src, name, handleClick, selected }) {
  return (
    <div className="card" onClick={handleClick} selected={selected}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function GameBoard() {
  const [charArray, setCharArray] = useState(characterArray);

  function handleCardClick(name, selected) {
    const newArray = charArray.map((image) => {
      if (image.name === name) {
        if (image.selected === true) {
          console.log("Game over");
        } else {
          return { ...image, selected: !image.selected };
        }
      }
      return image;
    });

    const shuffledArray = shuffleArray(newArray);
    setCharArray(shuffledArray);
    console.log(name, selected);
  }

  return (
    <div className="gameBoard">
      {charArray.map((image) => (
        <Card
          key={image.name}
          src={image.char}
          alt={image.name}
          name={image.name}
          handleClick={() => handleCardClick(image.name, image.selected)}
          selected={image.selected}
        />
      ))}
    </div>
  );
}
export { GameBoard };
