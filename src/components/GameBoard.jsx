import React, { useState, useEffect } from "react";
import { GameOver } from "./GameOver";

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

function GameBoard({ incrementScore, handleBestScore, gameOverComponent, charArray, setCharArray, gameOver, setGameOver }) {

  function handleCardClick(name, selected) {
    console.log(charArray);
    const newArray = charArray.map((image) => {
      if (image.name === name) {
        if (image.selected === true) {
          handleBestScore();
          setGameOver(true);
          console.log("Game over");
          console.log(gameOver)
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
      {gameOver ? gameOverComponent : null}
    </div>
  );
}
export { GameBoard };
