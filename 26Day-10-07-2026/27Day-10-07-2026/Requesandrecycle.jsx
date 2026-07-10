function Example27_RequestResponse() {

  const requestDetails = {
    method: "GET",
    endpoint: "/products"
  };

  const responseDetails = {
    status: 200,
    message: "Products received successfully"
  };

  return (
    <div>
      <h1>Request and Response Cycle</h1>

      <h2>Request</h2>

      <p>Method: {requestDetails.method}</p>

      <p>Endpoint: {requestDetails.endpoint}</p>

      <h2>Response</h2>

      <p>Status: {responseDetails.status}</p>

      <p>Message: {responseDetails.message}</p>
    </div>
  );
}

export default Example27_RequestResponse;