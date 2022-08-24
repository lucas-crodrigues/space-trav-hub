import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissionAction } from '../../redux/missions/missions';

const MissionLi = ({
  name, description, reserved, id,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(joinMissionAction(id));
  };

  const changeContentStatus = (bool) => (bool ? 'active member' : 'not a member');

  return (
    <li className="mission-li">
      <p className="mission-name">
        {name}
      </p>
      <p className="mission-description">
        {description}
      </p>
      <div className="mission-status">
        <p className={reserved ? 'joined' : ''}>
          {changeContentStatus(reserved)}
        </p>
      </div>
      <div className={reserved ? 'btn-container joined' : 'btn-container'}>
        <button type="button" onClick={handleClick}>{reserved ? 'leave' : 'join'}</button>
      </div>
    </li>
  );
};

MissionLi.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionLi;
