function Example23_JSONData() {

  const employee = {
    id: 101,
    name: "Sameer",
    role: "Web Developer"
  };

  return (
    <div>
      <h1>JSON Data Practice</h1>

      <h2>Employee ID: {employee.id}</h2>

      <h2>Employee Name: {employee.name}</h2>

      <h2>Employee Role: {employee.role}</h2>
    </div>
  );
}

export default Example23_JSONData;