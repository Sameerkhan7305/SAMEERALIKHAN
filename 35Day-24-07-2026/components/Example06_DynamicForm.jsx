import { useState } from "react";

function Example06_DynamicForm() {

  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");

  function addEmployee() {

    console.log(employeeName);
    console.log(employeeEmail);
    console.log(employeeDepartment);

  }

  return (

    <>

      <h1>Dynamic Form Handling</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={employeeEmail}
        onChange={(event) => setEmployeeEmail(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Department"
        value={employeeDepartment}
        onChange={(event) => setEmployeeDepartment(event.target.value)}
      />

      <br />
      <br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

    </>

  );

}

export default Example06_DynamicForm;