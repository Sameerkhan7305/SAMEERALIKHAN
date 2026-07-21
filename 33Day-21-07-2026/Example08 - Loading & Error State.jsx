import { useEffect, useState } from "react";

function Example08_LoadingError() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        setUsers(data);
        setLoading(false);

      });

  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return <h2>Total Users : {users.length}</h2>;
}

export default Example08_LoadingError;