/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Rocket = (props) => {
  const {
    id, rocket_name, description, flickr_images,
  } = props;

  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(console.log(`the rocket ${id}:${rocket_name} is reserved`));
  };

  return (
    <div className="rocket">
      <div className="rocketImage">
        <img src={flickr_images} alt={`${rocket_name}`} />
      </div>
      <div className="rocketInfo">
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        <button type="button" onClick={handleReserve}>Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
};

export default Rocket;
