function FinishScreen({ points, maxPossiblePoints, dispatch, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage.toFixed(2)})
      </p>
      <p className="highscore">High score: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "retake" })}
      >
        Retake Quiz
      </button>
    </>
  );
}

export default FinishScreen;
