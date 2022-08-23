import PropTypes from 'prop-types';

const MissionLi = ({ name, description, status }) => (
  <li className="mission-li">
    <p className="mission-name">
      {name}
    </p>
    <p className="mission-description">
      {description}
    </p>
    <div className="mission-status">
      <p>{status}</p>
    </div>
    <div className="btn-container">
      <button type="button">Join</button>
    </div>
  </li>
);

MissionLi.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MissionLi;
