import { Link } from "react-router-dom";
import questions from "../data/questions.json";
import { useLocation } from "react-router-dom";

function ShowResults() {
  const totalScore = 10;
  const location = useLocation();
  const state = location.state;

  const questionsArr = questions.questions;

  return (
    <>
      <div className="centered-container">
        <h2 className="result">
          You scored <strong>{`${state === null ? 0 : state}`}</strong> out of <strong>{totalScore}</strong> questions
        </h2>      
        <Link to='/'>
          <button
            className="btn btn-dark"
          >
            Restart quiz
          </button>
        </Link>
      </div>
      <div className="questions-answers">
        <h3 className="text-light text-center mb-4">Questions and Answers:</h3>
        <ol className="text-start text-light">
        {questionsArr.map((question, index) => (
          <li key={index} className="mb-4">
          {question.question} <br /> <span className="correct-result">{question.options[question.correctOption]}</span>
          </li>
        ))}
        </ol>
      </div>
    </>
  )
}

export default ShowResults;
