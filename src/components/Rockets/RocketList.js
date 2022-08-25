import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = ({ rocketsList }) => (
  <div className="rocketList">
    { rocketsList.map((rocket) => (
      <Rocket
        key={`rocket_${rocket.id}`}
        rocket={rocket}
      />
    ))}
  </div>
);

RocketList.propTypes = {
  rocketsList: PropTypes.instanceOf(Array).isRequired,
};

export default RocketList;
