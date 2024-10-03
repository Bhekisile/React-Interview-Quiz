import { useEffect, useState } from 'react';
import questions from '../data/questions';
import NextButton from './NextButton';
import { SkipForwardCircle, StopCircle, ArrowLeftCircle } from 'react-bootstrap-icons';
import FinishScreen from './FinishScreen';
import { Link } from 'react-router-dom';

const Question = () => {
  const numQuestions = questions.questions.length;  // From: https://reactjsquiz.com/quizzes

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [counter, setCounter] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [points, setPoints] = useState(0);

  const questionsArr = questions.questions[index];
  const hasAnswered = answer !== null;

  useEffect(() => {
    if (!isActive) return;

    const intervalId = setInterval(() => {
      setCounter((count) => {
        if (count === 0) {
          setIsActive(false);
          setIndex(index + 1);
          setAnswer(null);
          return 30; // Reset counter after finishing
        }
        return (count - 1);
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [isActive, setCounter, index]);

  const handleSkip = () => {
    // Add the current question to the flagged array if not already flagged
    if (!flaggedQuestions.includes(index)) {
      setFlaggedQuestions([...flaggedQuestions, index]);
    }
    // Move to the next question
    if (index < numQuestions - 1 && !hasAnswered) {
      setIndex(index + 1);
      setCounter(30);
    } else {
      <FinishScreen />
      setIsActive(false);
    }
  };

  const handleBackToSkipped = () => { 
    // Navigate to the previous skipped question
    if (flaggedQuestions.length > 0) {
      const lastFlaggedIndex = flaggedQuestions.indexOf(index) - 1;
      if (lastFlaggedIndex >= 0) {
        setIndex(flaggedQuestions[lastFlaggedIndex]);
        setCounter(30);
      }
    }
  };

  const displayResults = () => {
    setIsActive(false);
    setPoints(points);
  }
// console.log(flaggedQuestions);

  return (
    <div className='mt-2 w-75 p-2 mx-auto border border-dark rounded text-light'>
      <div className='mb-2'>Question {index + 1}/10</div>
        <div className='my-2'>{questionsArr.question}</div>
          <div>
            {questionsArr.options.map((option, index) => {
              return (
              <button 
                className={
                  `btn option btn-option border border-dark text-light 
                  ${answer === index ? 'answer' : ''} 
                  ${hasAnswered ? index === questionsArr.correctOption ? 'correct' : 'wrong' : ""}`
                } 
                key={index}
                onClick={() => {
                  setAnswer(index);
                  if (index === questionsArr.correctOption) {
                    setPoints(points + 1);
                  }
                }}
                disabled={hasAnswered}
              >
                {option}
              </button>
              );
            })}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="timer">
              {counter}
            </div>
          
            {flaggedQuestions.length > 0 && (
            <ArrowLeftCircle className='icons' onClick={handleBackToSkipped} />
            )}
            <Link to="/results" state={points}>
              <StopCircle className='icons' onClick={displayResults} />
            </Link>
            <SkipForwardCircle className='icons' onClick={handleSkip} />
            <NextButton 
              setIndex={setIndex} 
              setAnswer={setAnswer} 
              answer={answer} 
              index={index} 
              numQuestions={numQuestions} 
              setCounter={setCounter} 
              setIsActive={setIsActive} 
            />
          </div>
    </div>
  );
};

export default Question;



