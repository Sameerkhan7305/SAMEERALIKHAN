function Example_ReducerFunction() {

  const currentState = {
    score: 10
  };

  const scoreAction = {
    type: "add"
  };

  function scoreReducer(state, action) {

    if (action.type === "add") {
      return {
        score: state.score + 5
      };
    }

    return state;
  }

  const nextState = scoreReducer(currentState, scoreAction);

  return (
    <div>
      <h1>Reducer Function Example</h1>
      <h2>Old Score: {currentState.score}</h2>
      <h2>New Score: {nextState.score}</h2>
    </div>
  );
}

export default Example_ReducerFunction;