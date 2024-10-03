import FinishScreen from "./FinishScreen";

function NextButton(props) {
  return (
    <div className='mt-2'>
      {props.index < props.numQuestions -1
      ? <button 
          className='btn btn-primary' 
          onClick={() => {
            if (props.answer === null) return;
            props.setIndex(props.index + 1); 
            props.setAnswer(null); 
            props.setCounter(30)}}
        >
          Next
        </button>
      : <FinishScreen setIndex={props.setIndex} setAnswer={props.setAnswer} setCounter={props.setCounter} setIsActive={props.setIsActive} /> }
    </div>
  )
}

export default NextButton;
