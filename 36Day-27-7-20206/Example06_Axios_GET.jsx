import { useEffect, useState } from "react";
import axios from "axios";

function Example06_Axios_GET() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {

        setUsers(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <>

      <h1>Axios GET Request</h1>

      <h2>Total Users : {users.length}</h2>

      {

        users.map((user) => (

          <div
            key={user.id}
            style={{
              border: "1px solid black",
              marginBottom: "10px",
              padding: "10px"
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

export default Example06_Axios_GET;