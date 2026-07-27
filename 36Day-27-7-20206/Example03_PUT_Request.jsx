function Example03_PUT_Request() {

  function updateUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        id: 1,

        name: "Sameer Khan",

        email: "sameer@gmail.com",

        phone: "9876543210"

      })

    })

      .then((response) => response.json())

      .then((data) => {

        console.log(data);

        alert("User Updated Successfully");

      });

  }

  return (

    <>

      <h1>PUT Request Example</h1>

      <button onClick={updateUser}>
        Update User
      </button>

    </>

  );

}

export default Example03_PUT_Request;