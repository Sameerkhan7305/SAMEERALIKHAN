import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <>

            <h1>Dashboard</h1>

            <Link to="/dashboard/employee">
                Employee
            </Link>

            <br /><br />

            <Link to="/dashboard/settings">
                Settings
            </Link>

            <hr />

            <Outlet />

        </>

    );

}

export default Dashboard;