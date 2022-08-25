import PropTypes from 'prop-types';

const UserRockets = ({ name, wiki }) => (
  <li className="user-li">
    <p>{name}</p>
    <a href={wiki}>Learn More</a>
  </li>
);

UserRockets.propTypes = {
  name: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
};

export default UserRockets;
