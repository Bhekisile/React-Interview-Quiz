import { Link } from 'react-router-dom';

function StartQuiz() {
  return (
    <div className='height d-flex flex-column border justify-content-center align-items-center text-light'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>10 questions to test your React mastery</h3>
      <Link to='/main'>
        <button
          className="btn btn-dark"
        >
          Let's start
        </button>
      </Link>
    </div>
  )
}

export default StartQuiz;
