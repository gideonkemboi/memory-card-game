interface ScoresProps {
  score: number;
  bestScore: number;
}

function Scores({ score, bestScore }: ScoresProps) {
  return (
    <>
      <p>Score: {score} |</p>
      <p>Best Score: {bestScore}</p>
    </>
  );
}

export { Scores };
