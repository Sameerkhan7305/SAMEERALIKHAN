import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Example08_DynamicEmployeeList() {

  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");

  const [employees, setEmployees] = useState([]);

  function addEmployee() {

    if (
      employeeName === "" ||
      employeeEmail === "" ||
      employeeDepartment === ""
    ) {

      alert("Please Fill All Fields");

      return;

    }

    const newEmployee = {

      id: Date.now(),

      name: employeeName,

      email: employeeEmail,

      department: employeeDepartment

    };

    setEmployees([...employees, newEmployee]);

    setEmployeeName("");
    setEmployeeEmail("");
    setEmployeeDepartment("");

  }

  return (

    <>

      <h1>Dynamic Employee List</h1>

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

      <hr />

      {

        employees.map((employee) => (

          <EmployeeCard

            key={employee.id}

            employeeName={employee.name}

            employeeEmail={employee.email}

            employeeDepartment={employee.department}

          />

        ))

      }

    </>

  );

}

export default Example08_DynamicEmployeeList;