function Example02_POST_Request() {

  function addUser() {

    fetch("https://jsonplaceholder.typicode.com/users", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        name: "Sameer Khan",

        email: "sameer@gmail.com",

        phone: "9876543210"

      })

    })

      .then((response) => response.json())

      .then((data) => {

        console.log(data);

        alert("User Added Successfully");

      });

  }

  return (

    <>

      <h1>POST Request Example</h1>

      <button onClick={addUser}>

        Add User

      </button>

    </>

  );

}

export default Example02_POST_Request;