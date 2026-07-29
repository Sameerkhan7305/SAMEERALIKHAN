import { memo, useCallback, useState } from "react";

const EmployeeCard = memo(function EmployeeCard({
    onSalaryIncrease
}) {

    console.log("Employee Card Render");

    return (

        <div
            style={{
                border: "2px solid green",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h2>Employee Card</h2>

            <button
                onClick={onSalaryIncrease}
            >
                Increase Salary
            </button>

        </div>

    );

});

function Example05_UseCallback() {

    const [counterValue, setCounterValue] = useState(0);

    const increaseSalary = useCallback(() => {

        alert("Salary Increased");

    }, []);

    return (

        <div>

            <h1>With useCallback()</h1>

            <h2>Counter : {counterValue}</h2>

            <button
                onClick={() =>
                    setCounterValue(counterValue + 1)
                }
            >
                Increase Counter
            </button>

            <EmployeeCard
                onSalaryIncrease={increaseSalary}
            />

        </div>

    );

}

export default Example05_UseCallback;