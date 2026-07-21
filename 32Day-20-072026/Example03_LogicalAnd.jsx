function Example03_LogicalAnd() {

  const isAdmin = true;

  return (

    <>

      <h1>Dashboard</h1>

      {

        isAdmin && <button>Delete User</button>

      }

    </>

  );

}

export default Example03_LogicalAnd;