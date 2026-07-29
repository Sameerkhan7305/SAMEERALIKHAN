import { memo, useState } from "react";

const EmployeeCard = memo(function EmployeeCard({ employeeName }) {

  console.log("Employee Card Render");

  return (

    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        marginTop: "20px"
      }}
    >

      <h2>{employeeName}</h2>

    </div>

  );

});

function ExampleWithprops() {

  const [counterValue, setCounterValue] = useState(0);

  const [employeeName, setEmployeeName] = useState("Sameer");

  return (

    <div>

      <h2>Counter : {counterValue}</h2>

      <button
        onClick={() => setCounterValue(counterValue + 1)}
      >
        Increase Counter
      </button>

      <button
        onClick={() => setEmployeeName("Rahul")}
      >
        Change Employee
      </button>

      <EmployeeCard employeeName={employeeName} />

    </div>

  );

}

export default ExampleWithprops;