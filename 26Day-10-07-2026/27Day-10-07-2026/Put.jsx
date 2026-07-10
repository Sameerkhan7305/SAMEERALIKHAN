
import { useState } from "react";

function Example34_PUTRequest() {

  const [updatedArticle, setUpdatedArticle] = useState(null);

  async function updateArticle() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          id: 1,
          title: "React API Training",
          body: "Learning complete update using PUT",
          userId: 1
        })
      }
    );

    const data = await response.json();

    setUpdatedArticle(data);
  }

  return (
    <div>

      <h1>PUT Request Example</h1>

      <button onClick={updateArticle}>
        Update Complete Article
      </button>

      {updatedArticle && (
        <div>
          <h2>{updatedArticle.title}</h2>
          <p>{updatedArticle.body}</p>
        </div>
      )}

    </div>
  );
}

export default Example34_PUTRequest;