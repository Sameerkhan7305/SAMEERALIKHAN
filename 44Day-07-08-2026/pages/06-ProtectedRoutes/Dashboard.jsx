import { useNavigate } from "react-router-dom";

function Dashboard1() {

    const navigate = useNavigate();

    function handleLogout() {

        localStorage.removeItem("isLoggedIn");

        navigate("/login");

    }

    return (

        <>

            <h1>Protected Dashboard</h1>

            <button onClick={handleLogout}>

                Logout

            </button>

        </>

    );

}

export default Dashboard1;