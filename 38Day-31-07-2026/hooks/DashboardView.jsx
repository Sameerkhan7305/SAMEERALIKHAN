import useNumberCounter from "../hooks/useNumberCounter";

function DashboardView() {

    const {

        currentValue,

        increaseValue,

        decreaseValue,

        resetValue

    } = useNumberCounter(10);

    return (

        <>

            <h1>Company Dashboard</h1>

            <h2>Counter : {currentValue}</h2>

            <button onClick={increaseValue}>

                Increase

            </button>

            <button onClick={decreaseValue}>

                Decrease

            </button>

            <button onClick={resetValue}>

                Reset

            </button>

        </>

    );

}

export default DashboardView;