import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import UserMissions from '../components/user/user-missions';
import UserRockets from '../components/user/userRockets';
import { userMissionsAction, userRocketsAction } from '../redux/user/user';
import '../components/user/user.css';

const User = () => {
  const userData = useSelector((state) => state.user);
  const missionsData = useSelector((state) => state.missions);
  const rocketsData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userMissionsAction(missionsData));
    dispatch(userRocketsAction(rocketsData));
  }, []);
  return (
    <>
      <div className="user-page">
        <ul className="user-ul">
          <div className="user-title"> My Missions</div>
          {userData.missions.map((mission) => (
            <UserMissions
              key={mission.mission_id}
              name={mission.mission_name}
            />
          ))}
        </ul>
        <div className="vertical-line" />
        <ul className="user-ul">
          <div className="user-title"> My Missions</div>
          {userData.rockets.map((rocket) => (
            <UserRockets
              key={rocket.id}
              name={rocket.rocket_name}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default User;
