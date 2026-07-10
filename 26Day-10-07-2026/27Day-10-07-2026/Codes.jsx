function Example28_HTTPStatusCodes() {

  const successStatus = 200;

  const createdStatus = 201;

  const notFoundStatus = 404;

  const serverErrorStatus = 500;

  return (
    <div>
      <h1>HTTP Status Codes</h1>

      <p>200 - OK: {successStatus}</p>

      <p>201 - Created: {createdStatus}</p>

      <p>404 - Not Found: {notFoundStatus}</p>

      <p>500 - Internal Server Error: {serverErrorStatus}</p>
    </div>
  );
}

export default Example28_HTTPStatusCodes;