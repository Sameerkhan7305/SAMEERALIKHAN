function Example24_ClientServer() {

  const clientRequest = "Give me employee details";

  const serverResponse = "Employee details returned successfully";

  return (
    <div>
      <h1>Client-Server Architecture</h1>

      <h2>Client Request:</h2>
      <p>{clientRequest}</p>

      <h2>Server Response:</h2>
      <p>{serverResponse}</p>
    </div>
  );
}

export default Example24_ClientServer;