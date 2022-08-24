const USER_MISSIONS = 'space-thub/misssions/USER_MISSIONS';

export const userMissionsAction = (data) => ({
  type: USER_MISSIONS,
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
    default:
      return state;
  }
};

export default userReducer;
