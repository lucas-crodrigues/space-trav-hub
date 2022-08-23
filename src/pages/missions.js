import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getMissionsDataAPI } from '../redux/missions/missions';

const Missions = () => {
  const data = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  if (data.length === -1) {
    useEffect(
      () => {
        dispatch(getMissionsDataAPI());
      },
      [],
    );
  }
  console.log('------------------------missions--------------');
  console.log(data);
  return (
    <>
      <p>Missions</p>
    </>
  );
};

export default Missions;
