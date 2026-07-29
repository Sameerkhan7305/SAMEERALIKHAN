import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Example01_NormalComponent() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <EmployeeCard employeeName="Sameer" />
    </>
  );

}

export default Example01_NormalComponent;