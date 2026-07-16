import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./CounterSlice";

function ReduxCounter() {

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (

    <>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increase())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrease())}>
        Decrease
      </button>

    </>

  );

}

export default ReduxCounter;