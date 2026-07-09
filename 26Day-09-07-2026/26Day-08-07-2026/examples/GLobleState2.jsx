import { useState } from "react";

function StudentHeader({ studentName }) {
  return (
    <h2>Header Student: {studentName}</h2>
  );
}

function StudentProfile({ studentName }) {
  return (
    <h2>Profile Student: {studentName}</h2>
  );
}

function Example16_GlobalState() {

  const [studentName, setStudentName] = useState("Sameer");

  function updateStudentName() {
    setStudentName("Sameer Ali Khan");
  }

  return (
    <div>
      <h1>Global State Practice</h1>

      <StudentHeader studentName={studentName} />

      <StudentProfile studentName={studentName} />

      <button onClick={updateStudentName}>
        Update Student Name
      </button>
    </div>
  );
}

export default Example16_GlobalState;