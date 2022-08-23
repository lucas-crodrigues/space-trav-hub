import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import RocketList from '../components/Rockets/RocketList';
import {
  getRockets,
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
} from '../redux/rockets/fetchRockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketList = useSelector(selectAllRockets);
  const rocketsStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  React.useEffect(() => {
    if (rocketsStatus === 'initial') {
      dispatch(getRockets());
    }
  }, [rocketsStatus, dispatch]);

  let content;

  if (rocketsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (rocketsStatus === 'succeed') {
    const rocketInfo = rocketList[0];
    const library = [];
    rocketInfo.forEach((element) => {
      library.push({
        id: element.id.toString(),
        rocket_name: element.rocket_name,
        description: element.description,
        flickr_images: element.flickr_images[0],
      });
    });
    content = <RocketList rocketsList={library} />;
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
