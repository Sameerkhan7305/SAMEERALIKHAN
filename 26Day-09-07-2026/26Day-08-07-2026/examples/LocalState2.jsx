import { useState } from "react";

function Example14_LocalState() {

  const [score, setScore] = useState(0);

  function increaseScore() {
    setScore(score + 1);
  }

  return (
    <div>
      <h1>Local State Example</h1>

      <h2>Score: {score}</h2>

      <button onClick={increaseScore}>
        Increase Score
      </button>
    </div>
  );
}

export default Example14_LocalState;