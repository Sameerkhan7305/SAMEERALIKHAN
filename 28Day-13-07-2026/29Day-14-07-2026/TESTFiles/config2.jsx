import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

function Example_ReduxCounter() {

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Example_ReduxCounter;