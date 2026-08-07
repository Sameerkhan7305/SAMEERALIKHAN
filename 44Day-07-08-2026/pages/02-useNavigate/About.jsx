import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    return (

        <>

            <h1>About Page</h1>

            <button onClick={() => navigate("/")}>

                Back To Home

            </button>

        </>

    );

}

export default About;