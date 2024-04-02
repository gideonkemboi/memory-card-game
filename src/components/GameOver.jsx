function GameOver({ score, handleButtonClick }) {
  return (
    <div className="gameOverModal">
      <div className="modalContent">
        <h1>Game Over</h1>
        <p>Score: {score}</p>
        <button onClick={handleButtonClick}>Restart</button>
      </div>
    </div>
  );
}

export { GameOver };
