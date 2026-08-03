import { NavLink } from "react-router-dom";

function NavigationMenu() {

    return (

        <div>

   <h2>Company Portal</h2>

  <hr />

            <NavLink  to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black"})} >
                Home
            </NavLink>

            {" | "}

            <NavLink
                to="/about"  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
                About
            </NavLink>

            {" | "}

            <NavLink  to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "black"})}>
                Contact
            </NavLink>

            {" | "}

            <NavLink to="/services"  style={({ isActive }) => ({  color: isActive ? "red" : "black"  })} >
                Services
            </NavLink>

            <hr />

        </div>

    );

}

export default NavigationMenu;