import { useState } from "react";
import StudentInput from "./StudentInput";
import StudentDetails from "./StudentDetails";

function Parent() {

    const [studentName, setStudentName] = useState("");

    function receiveName(name) {
        setStudentName(name);
    }

    return (
        <div>

            <h1>Parent Component</h1>

            <StudentInput sendName={receiveName} />

            <StudentDetails studentName={studentName} />

        </div>
    );
}

export default Parent;