import { createContext, useContext } from "react";

const StudentContext = createContext();


function StudentCard() {

  const studentName = useContext(StudentContext);

  return (
    <div>
      <h2>Student Name: {studentName}</h2>
    </div>
  );
}


function Example18_ContextAPI1() {

  return (
    <StudentContext.Provider value="Sameer">
      <h1>Context API Example</h1>

      <StudentCard />
    </StudentContext.Provider>
  );
}


export default Example18_ContextAPI1;