import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import RocketList from '../components/Rockets/RocketList';
import {
  getRockets,
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
} from '../redux/rockets/fetchRockets';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketList = useSelector(selectAllRockets);
  const rocketsStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  React.useEffect(() => {
    if (rocketsStatus === 'initial') {
      dispatch(getRockets());
    }
  }, []);

  let content;

  if (rocketsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (rocketsStatus === 'succeed') {
    console.log('rocketList:');
    console.log(rocketList);
    content = <RocketList rocketsList={rocketList} />;
  } else if (rocketsStatus === 'fail') {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="rocketsArea">
        {content}
      </div>
    </>
  );
};

export default Rockets;
