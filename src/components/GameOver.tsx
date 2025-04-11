function GameOver({ score, handleButtonClick }) {
  return (
    <div className="gameOverModal">
      <div className="modalContent">
        <h1>{score ===88 ? "YOU WIN!" : "Game Over!"}</h1>
        <p>Score: {score}</p>
        <button onClick={handleButtonClick}>Restart</button>
      </div>
    </div>
  );
}

export { GameOver };
