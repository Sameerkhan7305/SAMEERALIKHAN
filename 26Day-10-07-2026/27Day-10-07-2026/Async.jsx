import { useState } from "react";

function Example31_AsyncAwaitAPI() {

  const [posts, setPosts] = useState([]);

  async function getPosts() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    const data = await response.json();

    setPosts(data);
  }

  return (
    <div>

      <h1>Async/Await with API Calls</h1>

      <button onClick={getPosts}>
        Get Posts
      </button>

      {posts.map((post) => (
        <div key={post.id}>

          <h2>{post.title}</h2>

          <p>{post.body}</p>

        </div>
      ))}

    </div>
  );
}

export default Example31_AsyncAwaitAPI;