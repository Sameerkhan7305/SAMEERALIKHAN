function Example25_RESTAPI() {

  const resourceName = "Employees";

  const apiEndpoint = "/employees";

  const httpOperation = "GET";

  return (
    <div>
      <h1>REST API Example</h1>

      <p>Resource: {resourceName}</p>

      <p>Endpoint: {apiEndpoint}</p>

      <p>HTTP Method: {httpOperation}</p>
    </div>
  );
}

export default Example25_RESTAPI;