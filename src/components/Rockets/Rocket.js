import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveToggle } from '../../redux/rockets/fetchRockets';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDesc, rocketImg, reserved,
  } = props;

  const dispatch = useDispatch();

  const handleReserve = (e) => {
    console.log('Ill reserve');
    const target = e.target.id;
    console.log(reserved);
    dispatch(reserveToggle(target));
    console.log(reserved);
  };

  // const handleReserve = () => {
  //   console.log('Ill reserve');
  //   console.log(rocketId);
  //   console.log(reserved);
  //   dispatch(reserveRocket(rocketId));
  //   console.log(reserved);
  // };

  // const handleCancel = () => {
  //   dispatch(cancelReserve(rocketId));
  // };

  return (
    <div className="rocket">
      <div className="rocketImage">
        <img src={rocketImg} alt={`${rocketName}`} />
      </div>
      <div className="rocketInfo">
        <h3>{rocketName}</h3>
        <p>
          {reserved === true ? (<span className="Reserved">Reserved</span>) : (<span className="Reserved">Available</span>)}
          {rocketDesc}
        </p>
        {reserved === true
          ? (<button type="button" id={rocketId} onClick={handleReserve}>Cancel Reservation</button>)
          : (<button type="button" id={rocketId} onClick={handleReserve}>Reserve Rocket</button>)}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDesc: PropTypes.string.isRequired,
  rocketImg: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
