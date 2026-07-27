function Example05_DELETE_Request() {

  function deleteUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {

      method: "DELETE"

    })

      .then((response) => {

        if (response.ok) {

          alert("User Deleted Successfully");

        }

        console.log(response.status);

      })

      .catch((error) => {

        console.log(error);

      });

  }

  return (

    <>

      <h1>DELETE Request Example</h1>

      <button onClick={deleteUser}>

        Delete User

      </button>

    </>

  );

}

export default Example05_DELETE_Request;