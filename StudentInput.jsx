import { useState } from "react";

function StudentInput(props) {

    const [name, setName] = useState("");

    function sendData() {

        props.sendName(name);

    }

    return (

        <div className="card">

            <h2>Child 1</h2>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <button onClick={sendData}>

                Send To Parent

            </button>

        </div>

    );
}

export default StudentInput;