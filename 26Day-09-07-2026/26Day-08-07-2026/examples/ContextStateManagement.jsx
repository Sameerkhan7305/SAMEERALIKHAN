import { createContext, useContext, useState } from "react";

const StudentContext = createContext();


function StudentCard() {

  const { studentName, setStudentName } = useContext(StudentContext);

  function updateStudentName() {
    setStudentName("Sameer Ali Khan");
  }

  return (
    <div>

      <h2>Student Name: {studentName}</h2>

      <button onClick={updateStudentName}>
        Update Student Name
      </button>

    </div>
  );
}


function Example22_ContextStateManagement() {

  const [studentName, setStudentName] = useState("Sameer");

  return (
    <StudentContext.Provider value={{ studentName, setStudentName }}>

      <h1>Context State Management</h1>

      <StudentCard />

    </StudentContext.Provider>
  );
}


export default Example22_ContextStateManagement;