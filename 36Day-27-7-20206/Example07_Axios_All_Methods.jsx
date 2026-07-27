import axios from "axios";

function Example07_Axios_All_Methods() {

  function getUsers() {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {

        console.log("GET Response");

        console.log(response.data);

      });

  }

  function addUser() {

    axios
      .post("https://jsonplaceholder.typicode.com/users", {

        name: "Sameer Khan",

        email: "sameer@gmail.com"

      })
      .then((response) => {

        console.log("POST Response");

        console.log(response.data);

      });

  }

  function updateUser() {

    axios
      .put("https://jsonplaceholder.typicode.com/users/1", {

        id: 1,

        name: "Updated Sameer",

        email: "updated@gmail.com"

      })
      .then((response) => {

        console.log("PUT Response");

        console.log(response.data);

      });

  }

  function updateEmail() {

    axios
      .patch("https://jsonplaceholder.typicode.com/users/1", {

        email: "newemail@gmail.com"

      })
      .then((response) => {

        console.log("PATCH Response");

        console.log(response.data);

      });

  }

  function deleteUser() {

    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {

        console.log("DELETE Response");

        console.log(response.status);

      });

  }

  return (

    <>

      <h1>Axios All Methods</h1>

      <button onClick={getUsers}>
        GET
      </button>

      <br /><br />

      <button onClick={addUser}>
        POST
      </button>

      <br /><br />

      <button onClick={updateUser}>
        PUT
      </button>

      <br /><br />

      <button onClick={updateEmail}>
        PATCH
      </button>

      <br /><br />

      <button onClick={deleteUser}>
        DELETE
      </button>

    </>

  );

}

export default Example07_Axios_All_Methods;