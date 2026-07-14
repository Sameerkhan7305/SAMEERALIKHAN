import { useState } from "react";

function Example39_Headers() {

  const [result, setResult] = useState("");

  async function sendDataWithHeaders() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: "Headers Practice"
        })
      }
    );

    const data = await response.json();

    setResult(data.title);
  }

  return (
    <div>

      <h1>Headers Example</h1>

      <button onClick={sendDataWithHeaders}>
        Send Request
      </button>

      <p>{result}</p>

    </div>
  );
}

export default Example39_Headers;