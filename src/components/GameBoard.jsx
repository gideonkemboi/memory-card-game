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

function GameBoard({ incrementScore, handleBestScore }) {
  const [charArray, setCharArray] = useState(characterArray);

  function handleCardClick(name, selected) {
    console.log(charArray);
    const newArray = charArray.map((image) => {
      if (image.name === name) {
        if (image.selected === true) {
          handleBestScore();
          console.log("Game over");
        } else {
          incrementScore();
          return { ...image, selected: !image.selected };
        }
      }
      return image;
    });

    console.log(newArray);
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
