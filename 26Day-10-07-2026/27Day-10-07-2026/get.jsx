import { useState } from "react";

function Example30_GetRequestFetch() {

  const [users, setUsers] = useState([]);

  function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }

  return (
    <div>

      <h1>GET Request using Fetch API</h1>

      <button onClick={getUsers}>
        Get Users
      </button>

      {users.map((user) => (
        <div key={user.id}>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

        </div>
      ))}

    </div>
  );
}

export default Example30_GetRequestFetch;