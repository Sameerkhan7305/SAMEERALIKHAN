import { useEffect } from "react";

function Example02_EmptyDependency1() {

  useEffect(() => {
    console.log("Runs only once");
  }, []);

  return <h1>Empty Dependency Array</h1>;
}

export default Example02_EmptyDependency1;