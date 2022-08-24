import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import UserMissions from '../components/user/user-missions';
import { userMissionsAction } from '../redux/user/user';
import '../components/user/user-missions.css';

const User = () => {
  const userData = useSelector((state) => state.user);
  const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userMissionsAction(missionsData));
  }, []);
  return (
    <>
      <ul className="user-missions-ul">
        <div className="user-missions-title"> My Missions</div>
        {userData.missions.map((mission) => (
          <UserMissions
            key={mission.mission_id}
            name={mission.mission_name}
          />
        ))}
      </ul>
    </>
  );
};

export default User;
