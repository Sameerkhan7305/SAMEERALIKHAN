// import { useState } from "react";
// import { useDispatch } from "react-redux";

// function Example_ReduxBasics() {

//   const dispatch = useDispatch();

//   const [displayVotes, setDisplayVotes] = useState(0);

//   function handleVoteIncrease() {

//     const increaseVoteAction = {
//       type: "vote/increase"
//     };

//     dispatch(increaseVoteAction);

//     setDisplayVotes((previousVotes) => previousVotes + 1);
//   }

//   return (
//     <div>

//       <h1>Redux Basics Example</h1>

//       <h2>Votes: {displayVotes}</h2>

//       <button onClick={handleVoteIncrease}>
//         Increase Vote
//       </button>

//     </div>
//   );
// }

// export default Example_ReduxBasics;