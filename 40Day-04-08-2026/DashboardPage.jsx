import { Link, Outlet } from "react-router-dom";

function DashboardPage() {

    return (

        <div>

  <h1>Company Dashboard</h1>

 <hr />

  <Link to="employee-profile">

  Employee Profile

  </Link>

 {" | "}

 <Link to="application-settings">

   Application Settings

  </Link>
 {" | "}

  <hr />

 <Link to="products">

    Products

</Link>

 {" | "}

<Link to="navigation">

    Navigation Example

</Link>

 {" | "}

<Link to="admin">

    Admin Panel

</Link>



 {" | "}
























            <Outlet />

        </div>

    );

}

export default DashboardPage;