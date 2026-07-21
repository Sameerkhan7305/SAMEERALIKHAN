import { useEffect } from "react";

function Example04_Cleanup() {

  useEffect(() => {

    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };

  }, []);

  return <h1>Cleanup Function</h1>;
}

export default Example04_Cleanup;