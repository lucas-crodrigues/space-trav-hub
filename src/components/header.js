import logo from '../img/planet.png';

const { NavLink } = require('react-router-dom');

const Header = () => {
  const handleClick = (e) => {
    document.querySelector('a').classList.remove('active');
    e.target.classList.add('active');
  };

  return (
    <header>
      <div className="headerLogo">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <NavLink to="/" onClick={handleClick}>Rockets</NavLink>
        <NavLink to="/missions" onClick={handleClick}>Missions</NavLink>
        <li>|</li>
        <NavLink to="/user" onClick={handleClick}>My Profile</NavLink>
      </ul>
    </header>
  );
};

export default Header;
