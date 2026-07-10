function Example23JSONData() {

  const employee = {
    id: 101,
    name: "Sameer",
    role: "Web Developer"
  };

  const jsonEmployee = JSON.stringify(employee);

  const convertedEmployee = JSON.parse(jsonEmployee);

  return (
    <div>
      <h1>JSON Conversion Practice</h1>

      <p>JSON String: {jsonEmployee}</p>

      <h2>Name: {convertedEmployee.name}</h2>

      <h2>Role: {convertedEmployee.role}</h2>
    </div>
  );
}

export default Example23JSONData;