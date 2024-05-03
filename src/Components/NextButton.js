function NextButton({ dispatch, answer, activeQuiz }) {
  if (answer === null) return;
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({ type: activeQuiz ? "nextQuestion" : "finished" })
        }
      >
        {activeQuiz ? "Next" : "Finish"}
      </button>
    </div>
  );
}

export default NextButton;
