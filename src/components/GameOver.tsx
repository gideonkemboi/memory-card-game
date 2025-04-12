interface GameOverProps {
  score: number;
  handleButtonClick: () => void;
}

export default function GameOver({ score, handleButtonClick }: GameOverProps) {
  return (
    <div className="gameOverModal fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-auto bg-black/40">
      <div className="modalContent flex w-4/5 max-w-2xl flex-col items-center rounded-sm border-1 border-zinc-500 bg-white p-5 text-black">
        <h1>{score === 88 ? "YOU WIN!" : "Game Over!"}</h1>
        <p>Score: {score}</p>
        <button
          onClick={handleButtonClick}
          className="cursor-pointer rounded-lg border border-transparent bg-[#1a1a1a] px-[1.2em] py-[0.6em] text-base font-medium text-white transition-colors duration-[250ms] hover:border-[#646cff]"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
