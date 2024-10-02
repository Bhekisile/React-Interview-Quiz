// import { useEffect, useState } from "react";

// function Timer({ incrementIndex, resetAnswer, counter, setCounter }) {
//   const [isActive, setIsActive] = useState(true); // Set to true to start the timer automatically

//   console.log(setCounter);

//   useEffect(() => {
//     if (!isActive) return; // Don't run the timer if it's inactive
    
//     const intervalId = setInterval(() => {
//       setCounter(count => {
//         if (count === 0) {
//           setIsActive(false);
//           incrementIndex();
//           resetAnswer();
//           return 30; // Reset the counter to 10 (or whatever the initial value is)
//         }
//         return count - 1;
//     });
//     }, 30);

//     return () => clearInterval(intervalId); // Clean up the interval on unmount
//   }, [isActive, counter, incrementIndex, resetAnswer, setCounter]);

//   return (
//     <div className="timer">
//       {counter}
//     </div>
//   );
// }

// export default Timer;

// import { useEffect, useState } from "react";

// function Timer({ incrementIndex, resetAnswer, counter, setCounter }) {
  

  

//   return (
    
//   );
// }

// export default Timer;
