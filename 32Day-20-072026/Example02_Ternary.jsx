function Example02_Ternary() {

  const isLoggedIn = false;

  return (

    <>

      {

        isLoggedIn

          ? <h1>Welcome Sameer</h1>

          : <h1>Please Login</h1>

      }

    </>

  );

}

export default Example02_Ternary;