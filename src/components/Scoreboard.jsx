const ScoreBoard = ({ score, bestScore, cardsLength }) => {
  return (
    <div className="score-board">
      <h3>Score Board: {score}.</h3>
      <h3>Best Score: {bestScore}.</h3>
      <h3>
        {score}/{cardsLength}
      </h3>
    </div>
  );
};
export default ScoreBoard;
