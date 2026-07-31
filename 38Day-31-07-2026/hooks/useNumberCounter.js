import { useState } from "react";

function useNumberCounter(initialNumber = 0) {

    const [currentValue, setCurrentValue] = useState(initialNumber);

    function increaseValue() {

        setCurrentValue((previousValue) => previousValue + 1);

    }

    function decreaseValue() {

        setCurrentValue((previousValue) => previousValue - 1);

    }

    function resetValue() {

        setCurrentValue(initialNumber);

    }

    return {

        currentValue,

        increaseValue,

        decreaseValue,

        resetValue

    };

}

export default useNumberCounter;