import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import MissionLi from '../components/missions/missions';
import { getMissionsDataAPI } from '../redux/missions/missions';
import '../components/missions/missions.css';

const Missions = () => {
  const data = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(
    () => {
      if (data.length === 0) dispatch(getMissionsDataAPI());
    },
    [],
  );
  return (
    <ul className="missions-container">
      <li className="mission-li">
        <p className="mission-name">Mission</p>
        <p className="mission-description">Description</p>
        <p className="mission-status">Status</p>
        <div className="btn-container" />
      </li>
      {data.map((mission) => (
        <MissionLi
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
    </ul>
  );
};

export default Missions;
