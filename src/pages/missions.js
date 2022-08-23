import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getMissionsDataAPI } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getMissionsDataAPI());
    },
    [],
  );
  const data = useSelector((state) => state.missions);
  console.log('------------------------missions--------------');
  console.log(data);
  return (
    <>
      <p>Missions</p>
    </>
  );
};

export default Missions;
