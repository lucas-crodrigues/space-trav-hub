import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveToggle } from '../../redux/rockets/fetchRockets';

const Rocket = (props) => {
  const { rocket } = props;

  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <div className="rocketImage">
        <img src={rocket.flickr_images} alt={`${rocket.rocket_name}`} />
      </div>
      <div className="rocketInfo">
        <h3>{rocket.rocket_name}</h3>
        <p>
          {rocket.reserved ? (<small className="reserved">Reserved</small>) : (<small className="available">Available</small>)}
          {rocket.description}
        </p>
        <button className={rocket.reserved ? 'activeButton' : ''} type="button" onClick={() => dispatch(reserveToggle({ rocket }))}>{rocket.reserved ? 'Cancel Reservation' : `Reserve ${rocket.rocket_name}` }</button>
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

export default Rocket;
