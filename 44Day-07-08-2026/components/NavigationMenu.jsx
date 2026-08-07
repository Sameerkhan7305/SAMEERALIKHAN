import { Link } from "react-router-dom";

function NavigationMenu() {

    return (

        <>

            <h2>Company Management Portal</h2>

            <hr />

            <Link to="/">Home</Link>

            {" | "}

            <Link to="/about">About</Link>

            {" | "}

            <Link to="/products">Products</Link>

            {" | "}

            <Link to="/navigate-home">Navigation</Link>

            {" | "}

            <Link to="/dashboard">Dashboard</Link>

            {" | "}

            <Link to="/login">Login</Link>

            <hr />

        </>

    );

}

export default NavigationMenu;