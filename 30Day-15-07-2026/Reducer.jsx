import { useReducer } from "react";

function BananaComponent() {

  const rocket = {
    count: 0
  };

  function elephant(mango, tiger) {

    if (tiger.type === "increase") {
      return {
        count: mango.count + 1
      };
    }

    return mango;
  }

  const [pizza, laptop] = useReducer(elephant, rocket);

  return (
    <div>
      <h1>Count: {pizza.count}</h1>

      <button
        onClick={() => laptop({ type: "increase" })}
      >
        Increase
      </button>
    </div>
  );
}

export default BananaComponent;