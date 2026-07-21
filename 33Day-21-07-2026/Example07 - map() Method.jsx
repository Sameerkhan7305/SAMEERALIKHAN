import { useEffect, useState } from "react";

function Example07_MapMethod() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return (

    <>
      {
        users.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))
      }
    </>

  );
}

export default Example07_MapMethod;