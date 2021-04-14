import './NavigationBar.scss';
import { NavLink} from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
        <ul className="navigationBar">
          <NavLink to='/'>
            <li>Log out</li>
          </NavLink>
          <NavLink to='/signup'>
            <li>Signup</li>
          </NavLink>
          <NavLink to='/addNewUser'>
            <li>AddNewUser</li>
          </NavLink>
          <NavLink to='/search'>
            <li>Search</li>
          </NavLink>
        </ul>
    </nav>
  );
}

export default NavigationBar;
