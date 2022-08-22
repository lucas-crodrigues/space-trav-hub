import logo from '../img/planet.png';

const { Link } = require('react-router-dom');

const Header = () => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    <ul>
      <Link to="/">nav 1</Link>
      <Link to="/">nav 2</Link>
    </ul>
  </header>
);

export default Header;
