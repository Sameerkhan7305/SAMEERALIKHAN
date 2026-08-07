import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

import Products from "../pages/04-useParams/Products";
import ProductDetails from "../pages/04-useParams/ProductDetails";

import NavigateHome from "../pages/02-useNavigate/Home";
import NavigateAbout from "../pages/02-useNavigate/About";

import Dashboard from "../pages/05-NestedRouting/Dashboard";
import Employee from "../pages/05-NestedRouting/Employee";
import Settings from "../pages/05-NestedRouting/Settings";


import Login from "../pages/06-ProtectedRoutes/Login";
import Dashboard1 from "../pages/06-ProtectedRoutes/Dashboard";
import ProtectedRoute from "../pages/06-ProtectedRoutes/ProtectedRoute";

import NavigationMenu from "../components/NavigationMenu";

function AppRoutes() {

    return (
<>
<NavigationMenu />


        <Routes>
<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/products" element={<Products />} />

<Route
    path="/products/:productId"
    element={<ProductDetails />}
/>

<Route
    path="/navigate-home"
    element={<NavigateHome />}
/>

<Route
    path="/navigate-about"
    element={<NavigateAbout />}
/>


{/* nestted  */}
<Route path="/dashboard" element={<Dashboard />}>

    <Route
        path="employee"
        element={<Employee />}
    />

    <Route
        path="settings"
        element={<Settings />}
    />

</Route>



{/* protectedd */}
<Route
    path="/login"
    element={<Login />}
/>

<Route
    path="/protected-dashboard"
    element={
        <ProtectedRoute>

            <Dashboard1 />

        </ProtectedRoute>
    }
/>































        </Routes>
</>
    );

}

export default AppRoutes;