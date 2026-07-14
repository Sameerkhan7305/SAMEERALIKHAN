import { useState } from "react";

function Example30_GetRequestFetch() {

  const [employees, setEmployees] = useState([]);

  function getEmployees() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      });
  }

  return (
    <div>

      <h1>GET Request using Fetch API</h1>

      <button onClick={getEmployees}>
        Get Employees
      </button>

      {employees.map((employee) => (
        <div key={employee.id}>

          <h2>{employee.name}</h2>

          <p>Email: {employee.email}</p>

          <p>Phone: {employee.phone}</p>

        </div>
      ))}

    </div>
  );
}

export default Example30_GetRequestFetch;6