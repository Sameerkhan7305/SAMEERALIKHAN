import { useState } from "react";

function Example36_DELETERequest() {

  const [message, setMessage] = useState("");

  async function deleteComment() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1",
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      setMessage("Comment deleted successfully");
    }
  }

  return (
    <div>

      <h1>DELETE Request Example</h1>

      <button onClick={deleteComment}>
        Delete Comment
      </button>

      <p>{message}</p>

    </div>
  );
}

export default Example36_DELETERequest;