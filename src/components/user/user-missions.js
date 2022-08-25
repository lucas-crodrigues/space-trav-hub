import PropTypes from 'prop-types';

const UserMissions = ({ name, wiki }) => (
  <li className="user-li">
    <p>{name}</p>
    <a href={wiki}>Learn More</a>
  </li>
);

UserMissions.propTypes = {
  name: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
};

export default UserMissions;
