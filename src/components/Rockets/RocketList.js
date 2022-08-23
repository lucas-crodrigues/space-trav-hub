import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = ({ rocketsList }) => (
  <div className="rocketList">
    { rocketsList.map((rocket) => (
      <Rocket
        key={`rocket_${rocket.id}`}
        id={rocket.id}
        rocket_name={rocket.rocket_name}
        description={rocket.description}
        flickr_images={rocket.flickr_images}
      />
    ))}
  </div>
);

RocketList.propTypes = {
  rocketsList: PropTypes.instanceOf(Array).isRequired,
};

export default RocketList;
