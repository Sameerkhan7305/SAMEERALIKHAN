import { useEffect, useState } from "react";

function Example01_GET_Request() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        setUsers(data);

      });

  }, []);

  return (

    <>

      <h1>GET Request Example</h1>

      <h2>Total Users : {users.length}</h2>

      {

        users.map((user) => (

          <div
            key={user.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <h3>{user.name}</h3>

            <p>Email : {user.email}</p>

            <p>Phone : {user.phone}</p>

          </div>

        ))

      }

    </>

  );

}

export default Example01_GET_Request;