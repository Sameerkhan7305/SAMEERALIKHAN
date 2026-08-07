import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleLogin() {

        localStorage.setItem("isLoggedIn", "true");

        navigate("/protected-dashboard");

    }

    return (

        <>

            <h1>Login Page</h1>

            <button onClick={handleLogin}>

                Login

            </button>

        </>

    );

}

export default Login;