function EmployeeCard(props) {
  return (
    <div className="employee-card">

      <h3>{props.employeeName}</h3>

      <p>Email : {props.employeeEmail}</p>

      <p>Department : {props.employeeDepartment}</p>

    </div>
  );
}

export default EmployeeCard;