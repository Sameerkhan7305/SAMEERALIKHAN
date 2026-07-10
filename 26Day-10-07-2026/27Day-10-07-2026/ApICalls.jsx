function Example29_APICallWays() {

  const apiCallMethods = [
    {
      name: "Fetch API",
      type: "Built-in Web API"
    },
    {
      name: "Axios",
      type: "External HTTP Client Library"
    },
    {
      name: "XMLHttpRequest",
      type: "Older Browser API"
    }
  ];

  return (
    <div>
      <h1>Different Ways of Making API Calls</h1>

      {apiCallMethods.map((apiMethod) => (
        <div key={apiMethod.name}>

          <h2>{apiMethod.name}</h2>

          <p>{apiMethod.type}</p>

        </div>
      ))}
    </div>
  );
}

export default Example29_APICallWays;