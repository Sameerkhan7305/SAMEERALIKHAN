import "./styles/main.css";
import { calculateAddition } from "./mathUtils";

import { displayWelcomeMessage } from "./greetingMessage";

import { getStudentName } from "./studentDetails";

import { getEmployeeName, getEmployeeRole} from "./employeeDetails";

import { getCompanyName, getCompanyLocation} from "./companyDetails";

import { getCourseName, getCourseDuration} from "./courseDetails";

import { multiplyNumbers,divideNumbers} from "./utils/numberUtils";

import { convertToUpperCase,convertToLowerCase} from "./utils/stringUtils";

import companyLogo from "./assets/companyLogo.png";

displayWelcomeMessage();

console.log(getStudentName());

console.log(getEmployeeName());

console.log(getEmployeeRole());

console.log(getCompanyName());

console.log(getCompanyLocation());

console.log(getCourseName());

console.log(getCourseDuration());

console.log(calculateAddition(20,30));

console.log(multiplyNumbers(10,5));

console.log(divideNumbers(100,10));

console.log(convertToUpperCase("webpack"));

console.log(convertToLowerCase("WEBPACK"));


const appRoot = document.getElementById("root");

appRoot.innerHTML = `
    <div class="dashboard">

        <h1>Webpack Employee Dashboard</h1>

        <img src="${companyLogo}" width="200">

        <hr>

        <p><strong>Student :</strong> ${getStudentName()}</p>

        <p><strong>Employee :</strong> ${getEmployeeName()}</p>

        <p><strong>Role :</strong> ${getEmployeeRole()}</p>

        <p><strong>Company :</strong> ${getCompanyName()}</p>

        <p><strong>Location :</strong> ${getCompanyLocation()}</p>

        <p><strong>Course :</strong> ${getCourseName()}</p>

        <p><strong>Duration :</strong> ${getCourseDuration()}</p>

        <p><strong>Addition :</strong> ${calculateAddition(20,30)}</p>

        <p><strong>Multiplication :</strong> ${multiplyNumbers(10,5)}</p>

        <p><strong>Division :</strong> ${divideNumbers(100,10)}</p>

        <p><strong>Uppercase :</strong> ${convertToUpperCase("webpack")}</p>

        <p><strong>Lowercase :</strong> ${convertToLowerCase("WEBPACK")}</p>

    </div>
`;