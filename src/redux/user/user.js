const USER_MISSIONS = 'space-thub/misssions/USER_MISSIONS';
const USER_ROCKETS = 'space-thub/misssions/USER_ROCKETS';

export const userMissionsAction = (data) => ({
  type: USER_MISSIONS,
  payload: data,
});

export const userRocketsAction = (data) => ({
  type: USER_ROCKETS,
  payload: data,
});

const initialState = {
  missions: [],
  rockets: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_MISSIONS:
      return {
        ...state,
        missions: action.payload.filter((mission) => mission.reserved === true),
      };
    case USER_ROCKETS:
      return {
        ...state,
        rockets: action.payload.filter((rocket) => rocket.reserved === true),
      };
    default:
      return state;
  }
};

export default userReducer;
