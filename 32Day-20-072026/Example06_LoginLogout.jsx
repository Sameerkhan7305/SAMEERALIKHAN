import { useState } from "react";

function Example06_LoginLogout() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {

    setIsLoggedIn(true);

  }

  function handleLogout() {

    setIsLoggedIn(false);

  }

  return (

    <>

      {

        isLoggedIn ? (

          <>

            <h1>Welcome Sameer</h1>

            <h2>You are successfully logged in.</h2>

            <button onClick={handleLogout}>
              Logout
            </button>

          </>

        ) : (

          <>

            <h1>Please Login</h1>

            <button onClick={handleLogin}>
              Login
            </button>

          </>

        )

      }

    </>

  );

}

export default Example06_LoginLogout;