import React, { useState, useEffect } from "react";

function Card({ src, name, handleClick, selected }) {
  return (
    <div className="card" onClick={handleClick} selected={selected}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}

function GameBoard({
  score,
  setScore,
  bestScore,
  setBestScore,
  gameOverComponent,
  characterArray,
  charArray,
  setCharArray,
  arrayLength,
  setArrayLength,
  gameOver,
  setGameOver,
}) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleCardClick(name, selected) {
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
      let newArray = shuffleArray(characterArray.slice(0, newLength));
      setCharArray(newArray);
      setArrayLength(newLength);
      console.log(name, selected);
    } else {
      setCharArray(shuffleArray(newArray));
      console.log(name, selected);
    }
  }

  let className = "gameBoard" + arrayLength;

  return (
    <div className={className} >
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
