import { useEffect, useState } from "react";

function Example02_EmptyDependency() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {

    console.log("Component Mounted");

  }, []);

  return (

    <>

      <h1>Counter : {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Increase
      </button>

    </>

  );

}

export default Example02_EmptyDependency;