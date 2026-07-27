function Example04_PATCH_Request() {

  function updateUserEmail() {

    fetch("https://jsonplaceholder.typicode.com/users/1", {

      method: "PATCH",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        email: "sameer@gmail.com"

      })

    })

      .then((response) => response.json())

      .then((data) => {

        console.log(data);

        alert("Email Updated Successfully");

      });

  }

  return (

    <>

      <h1>PATCH Request Example</h1>

      <button onClick={updateUserEmail}>

        Update Email

      </button>

    </>

  );

}

export default Example04_PATCH_Request;