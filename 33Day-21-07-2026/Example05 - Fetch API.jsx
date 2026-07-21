import { useEffect, useState } from "react";

function Example05_FetchAPI() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

  }, []);

  return <h1>Total Users : {users.length}</h1>;
}

export default Example05_FetchAPI;