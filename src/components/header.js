import logo from '../img/planet.png';

const { NavLink } = require('react-router-dom');

const Header = () => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    <ul>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/user">My Profile</NavLink>
    </ul>
  </header>
);

export default Header;
