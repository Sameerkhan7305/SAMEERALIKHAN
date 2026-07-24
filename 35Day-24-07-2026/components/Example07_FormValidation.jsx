import { useState } from "react";

function Example07_FormValidation() {

  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");
  const [message, setMessage] = useState("");

  function addEmployee() {

    if (employeeName === "") {

      setMessage("Name is Required");
      return;

    }

    if (employeeEmail === "") {

      setMessage("Email is Required");
      return;

    }

    if (employeeDepartment === "") {

      setMessage("Department is Required");
      return;

    }

    setMessage("Employee Added Successfully");

    console.log(employeeName);
    console.log(employeeEmail);
    console.log(employeeDepartment);

    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeeDepartment("");

  }

  return (
    <>

      <h1>Form Validation</h1>

      <h3>{message}</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={employeeEmail}
        onChange={(event) => setEmployeeEmail(event.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Department"
        value={employeeDepartment}
        onChange={(event) => setEmployeeDepartment(event.target.value)}
      />

      <br /><br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

    </>
  );

}

export default Example07_FormValidation;