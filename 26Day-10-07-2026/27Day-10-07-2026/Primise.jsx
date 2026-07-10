import { useState } from "react";

function Example32_PromiseBasedAPI() {

  const [albums, setAlbums] = useState([]);

  function getAlbums() {

    fetch("https://jsonplaceholder.typicode.com/albums?_limit=5")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
      });
  }

  return (
    <div>

      <h1>Promise-based API Call</h1>

      <button onClick={getAlbums}>
        Get Albums
      </button>

      {albums.map((album) => (
        <p key={album.id}>
          {album.title}
        </p>
      ))}

    </div>
  );
}

export default Example32_PromiseBasedAPI;