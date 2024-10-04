import { Link } from 'react-router-dom';

function StartQuiz() {
  return (
    <div className='height d-flex flex-column border justify-content-center align-items-center text-light'>
      <h1 className='result'>Welcome to The React Quiz!</h1>
      <h3 className='mb-4'>Ten questions to test your React fundamentals</h3>
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
