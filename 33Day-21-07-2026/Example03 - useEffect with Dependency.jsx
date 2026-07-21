import { useEffect, useState } from "react";

function Example03_Dependency() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed :", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Example03_Dependency;