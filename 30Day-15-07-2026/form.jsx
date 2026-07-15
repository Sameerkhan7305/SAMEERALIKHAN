import { useReducer } from "react";

function Example_UseReducerCounter() {

  const startingNumber = {
    count: 0
  };

  function numberController(currentNumber, receivedAction) {

    if (receivedAction.type === "INCREASE") {
      return {
        count: currentNumber.count + 1
      };
    }

    if (receivedAction.type === "DECREASE") {
      return {
        count: currentNumber.count - 1
      };
    }

    if (receivedAction.type === "RESET") {
      return {
        count: 0
      };
    }

    return currentNumber;
  }

  const [numberStatus, sendAction] = useReducer(
    numberController,
    startingNumber
  );

  return (
    <div>

      <h1>Counter: {numberStatus.count}</h1>

      <button
        onClick={() => sendAction({ type: "INCREASE" })}
      >
        Increase
      </button>

      <button
        onClick={() => sendAction({ type: "DECREASE" })}
      >
        Decrease
      </button>

      <button
        onClick={() => sendAction({ type: "RESET" })}
      >
        Reset
      </button>

    </div>
  );
}

export default Example_UseReducerCounter;