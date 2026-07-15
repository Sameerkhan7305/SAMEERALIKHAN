import { useDispatch, useSelector } from "react-redux";
import { increment } from "./File.jsx";


function Example_StateManagementRedux() {

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function increaseCount() {
    dispatch(increment());
  }

  return (
    <div>
      <h1>Redux Toolkit State Management</h1>

      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default Example_StateManagementRedux;