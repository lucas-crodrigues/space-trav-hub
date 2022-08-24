import PropTypes from 'prop-types';
import Rocket from './Rocket';

const RocketList = ({ rocketsList }) => (
  <div className="rocketList">
    { rocketsList.map((rocket) => (
      <Rocket
        key={`rocket_${rocket.rocketId}`}
        rocketId={rocket.rocketId}
        rocketName={rocket.rocketName}
        rocketDesc={rocket.rocketDesc}
        rocketImg={rocket.rocketImg}
        reserved={rocket.reserved}
      />
    ))}
  </div>
);

RocketList.propTypes = {
  rocketsList: PropTypes.instanceOf(Array).isRequired,
};

export default RocketList;
