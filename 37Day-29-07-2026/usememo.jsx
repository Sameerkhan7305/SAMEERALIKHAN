import { useMemo, useState } from "react";

function Example04_UseMemo() {

  const [counterValue, setCounterValue] = useState(0);

  const [employeeSalary, setEmployeeSalary] = useState(50000);

  function calculateBonus() {

    console.log("Bonus Calculation Running...");

    let totalBonus = 0;

    for (let number = 1; number <= 100000000; number++) {

      totalBonus += number;

    }

    return employeeSalary * 0.10;

  }

  const bonusAmount = useMemo(() => {

    return calculateBonus();

  }, [employeeSalary]);

  return (

    <div>

      <h1>With useMemo()</h1>

      <h2>Counter : {counterValue}</h2>

      <h2>Salary : ₹{employeeSalary}</h2>

      <h2>Bonus : ₹{bonusAmount}</h2>

      <button
        onClick={() => setCounterValue(counterValue + 1)}
      >
        Increase Counter
      </button>

      <button
        onClick={() => setEmployeeSalary(employeeSalary + 5000)}
      >
        Increase Salary
      </button>

    </div>

  );

}

export default Example04_UseMemo;