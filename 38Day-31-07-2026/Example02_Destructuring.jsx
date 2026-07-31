function Example02_Destructuring() {

    const employee = {

        employeeId: 101,

        employeeName: "Sameer",

        employeeDepartment: "React",

        employeeSalary: 50000

    };

    const {

        employeeId,

        employeeName,

        employeeDepartment,

        employeeSalary

    } = employee;

    return (

        <div>

            <h1>Object Destructuring</h1>

            <h2>ID : {employeeId}</h2>

            <h2>Name : {employeeName}</h2>

            <h2>Department : {employeeDepartment}</h2>

            <h2>Salary : ₹{employeeSalary}</h2>

        </div>

    );

}

export default Example02_Destructuring;