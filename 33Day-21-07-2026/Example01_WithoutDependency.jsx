import { useEffect, useState } from "react";

function Example01_WithoutDependency() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("useEffect Executed");

  });

  return (

    <>

      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </>

  );

}

export default Example01_WithoutDependency;