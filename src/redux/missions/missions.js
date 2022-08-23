import apiService from '../../api/missionsApi';

const GET_MISSIONS_DATA = 'space-thub/misssions/GET_MISSIONS_DATA';

export const getMissionsDataAPI = () => async (dispatch) => {
  try {
    const res = await apiService.getAll();
    const { data } = res;
    dispatch({
      type: GET_MISSIONS_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
