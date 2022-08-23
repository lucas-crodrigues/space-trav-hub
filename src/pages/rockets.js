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
    // const keys = Object.keys(rocketList[0]);
    // const library = [];
    // keys.forEach((element) => {
    //   library.push({
    //     id: element,
    //     author: rocketList[0][element][0].author,
    //     title: rocketList[0][element][0].title,
    //     category: rocketList[0][element][0].category,
    //   });
    // });
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
