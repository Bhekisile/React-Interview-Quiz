import { Link } from "react-router-dom";
import questions from "../data/questions.json";

function ShowResults() {
  const totalScore = 10;

  const questionsArr = questions.questions;
  // console.log(questionsArr);
  // const [correct, setCorrect] = useState(0);

  // index === questionsArr.correctOption ? correct + 1 : "";

  return (
    <>
      <div className="centered-container">
        <h2>
          You scored <strong>5</strong> out of <strong>{totalScore}</strong> questions.
        </h2>      
        <Link to='/'>
          <button
            className="btn btn-dark"
          >
            Restart quiz
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <h3 className="text-light">Questions:</h3>
        <ol className="text-start text-light">
        {questionsArr.map((question, index) => (
          <li key={index}>
          {question.question} <br /> <span className="correct-result">{question.options[question.correctOption]}</span>
          </li>
        ))}
        </ol>
      </div>
    </>
  )
}

export default ShowResults;
