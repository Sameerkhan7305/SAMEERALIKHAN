import { useEffect } from "react";

function Example01_WithoutDependency2() {

  useEffect(() => {
    console.log("Runs after every render");
  });

  return <h1>Without Dependency Array</h1>;
}

export default Example01_WithoutDependency2;