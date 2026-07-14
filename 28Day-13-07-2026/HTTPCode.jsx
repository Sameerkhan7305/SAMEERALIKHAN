function Example28_HTTPStatusCodes() {

  const statusCodes = [
    { code: 200, meaning: "OK" },
  { code: 201, meaning: "Created" },
{ code: 204, meaning: "No Content" },
{ code: 400, meaning: "Bad Request" },
 { code: 401, meaning: "Unauthorized" },
 { code: 403, meaning: "Forbidden" },
 { code: 404, meaning: "Not Found" },
 { code: 500, meaning: "Internal Server Error" }
  ];

  return (
    <div>
      <h1>HTTP Status Codes</h1>

      {statusCodes.map((statusItem) => (
        <p key={statusItem.code}>
          {statusItem.code} - {statusItem.meaning}
        </p>
      ))}
    </div>
  );
}

export default Example28_HTTPStatusCodes;