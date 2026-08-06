// studentDetails.js

const studentInformation = {

    studentName: "Sameer Khan",

    studentAge: 26

};

export const getStudentName = () => {

    return `${studentInformation.studentName}`;

};

export const getStudentAge = () => {

    return `${studentInformation.studentAge}`;

};