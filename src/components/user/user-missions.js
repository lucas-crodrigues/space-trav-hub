import PropTypes from 'prop-types';

const UserMissions = ({ name }) => (
  <li className="user-missions-li">
    <p>{name}</p>
  </li>
);

UserMissions.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserMissions;
