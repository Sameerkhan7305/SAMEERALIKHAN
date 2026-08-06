import "./styles/main.css";

import companyLogo from "./assets/companyLogo.png";

import { calculateAddition } from "./mathUtils";

import { displayWelcomeMessage } from "./greetingMessage";

import { getStudentName, getStudentAge } from "./studentDetails";

import { getEmployeeName, getEmployeeRole } from "./employeeDetails";

import { getCompanyName, getCompanyLocation } from "./companyDetails";

import { getCourseName, getCourseDuration } from "./courseDetails";

import { multiplyNumbers, divideNumbers } from "./utils/numberUtils";

import { convertToUpperCase, convertToLowerCase } from "./utils/stringUtils";

displayWelcomeMessage();

const studentName = getStudentName();
const studentAge = getStudentAge();

const employeeName = getEmployeeName();
const employeeRole = getEmployeeRole();

const companyName = getCompanyName();
const companyLocation = getCompanyLocation();

const courseName = getCourseName();
const courseDuration = getCourseDuration();

const additionResult = calculateAddition(20, 30);
const multiplicationResult = multiplyNumbers(10, 5);
const divisionResult = divideNumbers(100, 10);

const upperCaseText = convertToUpperCase("webpack");
const lowerCaseText = convertToLowerCase("WEBPACK");

console.log(studentName);
console.log(studentAge);

console.log(employeeName);
console.log(employeeRole);

console.log(companyName);
console.log(companyLocation);

console.log(courseName);
console.log(courseDuration);

console.log(additionResult);
console.log(multiplicationResult);
console.log(divisionResult);

console.log(upperCaseText);
console.log(lowerCaseText);

const applicationRoot = document.getElementById("root");

applicationRoot.innerHTML = `

<div class="dashboard">

<h1>Webpack Employee Dashboard</h1>

<img src="${companyLogo}" width="180">

<hr>

<p><strong>Student :</strong> ${studentName}</p>

<p><strong>Age :</strong> ${studentAge}</p>

<p><strong>Employee :</strong> ${employeeName}</p>

<p><strong>Role :</strong> ${employeeRole}</p>

<p><strong>Company :</strong> ${companyName}</p>

<p><strong>Location :</strong> ${companyLocation}</p>

<p><strong>Course :</strong> ${courseName}</p>

<p><strong>Duration :</strong> ${courseDuration}</p>

<p><strong>Addition :</strong> ${additionResult}</p>

<p><strong>Multiplication :</strong> ${multiplicationResult}</p>

<p><strong>Division :</strong> ${divisionResult}</p>

<p><strong>Uppercase :</strong> ${upperCaseText}</p>

<p><strong>Lowercase :</strong> ${lowerCaseText}</p>

</div>

`;