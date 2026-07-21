import { useState } from "react";

function Example07_UserDashboard() {

  const [userRole, setUserRole] = useState("Guest");

  function changeRole(role) {

    setUserRole(role);

  }

  return (

    <>

      <h1>Current Role : {userRole}</h1>

      <button onClick={() => changeRole("Admin")}>
        Admin
      </button>

      <button onClick={() => changeRole("Employee")}>
        Employee
      </button>

      <button onClick={() => changeRole("Customer")}>
        Customer
      </button>

      <button onClick={() => changeRole("Guest")}>
        Guest
      </button>

      <hr />

      {userRole === "Admin" && (
        <h2>Welcome to Admin Dashboard</h2>
      )}

      {userRole === "Employee" && (
        <h2>Welcome to Employee Dashboard</h2>
      )}

      {userRole === "Customer" && (
        <h2>Welcome to Customer Dashboard</h2>
      )}

      {userRole === "Guest" && (
        <h2>Please Login</h2>
      )}

    </>

  );

}

export default Example07_UserDashboard;