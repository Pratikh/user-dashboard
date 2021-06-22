import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul className="navigationBar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/addNewUser">AddNewUser</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/">Log out</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </ul>
    </nav>
  );
}

export default NavigationBar;
