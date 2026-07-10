import { useState } from "react";

function Example33_POSTRequest() {

  const [createdTask, setCreatedTask] = useState(null);

  async function createTask() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: "Learn React API",
          completed: false
        })
      }
    );

    const data = await response.json();

    setCreatedTask(data);
  }

  return (
    <div>

      <h1>POST Request Example</h1>

      <button onClick={createTask}>
        Create Task
      </button>

      {createdTask && (
        <div>
          <p>Title: {createdTask.title}</p>
          <p>
            Completed: {createdTask.completed ? "Yes" : "No"}
          </p>
        </div>
      )}

    </div>
  );
}

export default Example33_POSTRequest;