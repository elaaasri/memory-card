const ScoreBoard = ({ score, bestScore, cardsLength }) => {
  return (
    <div className="score-board">
      <h1>Score Board: {score}.</h1>
      <h1>Best Score: {bestScore}.</h1>
      <h1>
        {score}/{cardsLength}
      </h1>
    </div>
  );
};
export default ScoreBoard;
