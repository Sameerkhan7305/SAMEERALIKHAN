import { useState } from "react";

function EmployeeCard() {

  console.log("Employee Card Render");

  return (

    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        marginTop: "20px"
      }}
    >

      <h2>Employee Name : Sameer</h2>

      <h2>Department : React</h2>

    </div>

  );

}

function Example03_ReactMemo() {

  const [counterValue, setCounterValue] = useState(0);

  return (

    <div>

      <h1>React.memo Example</h1>

      <h2>Counter : {counterValue}</h2>

      <button
        onClick={() => setCounterValue(counterValue + 1)}
      >
        Increase
      </button>

      <EmployeeCard />

    </div>

  );

}

export default Example03_ReactMemo;