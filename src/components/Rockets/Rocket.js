import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveToggle } from '../../redux/rockets/fetchRockets';

const Rocket = (props) => {
  const {
    rocket,
  } = props;

  const dispatch = useDispatch();

  const handleReserve = () => {
    console.log('Ill reserve');
    console.log('hello', dispatch(reserveToggle(rocket.id)));
    return dispatch(reserveToggle(rocket.id));
  };

  return (
    <div className="rocket">
      <div className="rocketImage">
        <img src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      </div>
      <div className="rocketInfo">
        <h3>{rocket.rocket_name}</h3>
        <p>
          {rocket.reserved ? (<small className="reserved">Reserved</small>) : (<small className="reserved">Available</small>)}
          {rocket.description}
        </p>
        <button className={rocket.reserved ? 'activeButton' : 'notActiveButton'} type="button" onClick={() => dispatch(reserveToggle({ rocket }))}>{rocket.reserved ? 'Cancel Reservation' : `reserve ${rocket.rocket_name}` }</button>
        {rocket.reserved
          ? (<button type="button" id={rocket.id} onClick={handleReserve}>Cancel Reservation</button>)
          : (<button type="button" id={rocket.id} onClick={handleReserve}>Reserve Rocket</button>)}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      id: PropTypes.number,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};

// Rocket.propTypes = {
//   rocketId: PropTypes.string.isRequired,
//   rocketName: PropTypes.string.isRequired,
//   rocketDesc: PropTypes.string.isRequired,
//   rocketImg: PropTypes.string.isRequired,
//   reserved: PropTypes.bool.isRequired,
// };

export default Rocket;
