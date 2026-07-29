import React from "react";

function EmployeeCard({ employeeName }) {

  console.log(employeeName, "Rendered");

  return (
    <>
      <h2>Employee : {employeeName}</h2>
    </>
  );

}

export default React.memo(EmployeeCard);