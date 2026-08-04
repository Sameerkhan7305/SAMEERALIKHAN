import { useNavigate } from "react-router-dom";

function GoToProfilePage() {

    const navigate = useNavigate();

    function openEmployeeProfile() {

        navigate("/dashboard/employee-profile");

    }

    return (

        <div>

            <h2>Navigation Example</h2>

            <p>Click the button to open Employee Profile.</p>

            <button onClick={openEmployeeProfile}>

                Go To Employee Profile

            </button>

        </div>

    );

}

export default GoToProfilePage;