import { Link } from 'react-router-dom';

function FinishScreen({ setIsActive }) {

  function handleClick() {
    setIsActive(false); // Stop the timer when clicked
  }

  return ( 
    <div className="d-flex justify-content-end">
      <Link to="/results">
        <button className="btn btn-primary" onClick={handleClick}>
          Finish
        </button>
      </Link>
    </div>
  );
}

export default FinishScreen;
