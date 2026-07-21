import axios from "axios";
import { useEffect, useState } from "react";

function Example06_AxiosAPI() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));

  }, []);

  return <h1>Total Posts : {posts.length}</h1>;
}

export default Example06_AxiosAPI;