import PropTypes from 'prop-types';

const UserRockets = ({ name }) => (
  <li className="user-li">
    <p>{name}</p>
  </li>
);

UserRockets.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserRockets;
