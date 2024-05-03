import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {/* <button
        className="btn"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Previous
      </button> */}
    </div>
  );
}

export default Question;
