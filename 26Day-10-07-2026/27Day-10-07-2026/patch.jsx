import { useState } from "react";

function Example35_PATCHRequest() {

  const [modifiedProduct, setModifiedProduct] = useState(null);

  async function changeProductTitle() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2",
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: "Updated Product Title"
        })
      }
    );

    const data = await response.json();

    setModifiedProduct(data);
  }

  return (
    <div>

      <h1>PATCH Request Example</h1>

      <button onClick={changeProductTitle}>
        Change Title Only
      </button>

      {modifiedProduct && (
        <h2>
          Updated Title: {modifiedProduct.title}
        </h2>
      )}

    </div>
  );
}

export default Example35_PATCHRequest;