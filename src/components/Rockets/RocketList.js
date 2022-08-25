import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/fetchRockets';
import Rocket from './Rocket';

const RocketList = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  });

  return (
    <div className="rocketList">
      { rockets.map((rocket) => (
        <Rocket
          key={`rocket_${rocket.id}`}
          rocket={rocket}
        />
      ))}
    </div>
  );
};

export default RocketList;
