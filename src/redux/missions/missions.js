import apiService from '../../api/missionsApi';

const GET_MISSIONS_DATA = 'space-thub/misssions/GET_MISSIONS_DATA';

export const getMissionsDataAPI = () => async (dispatch) => {
  try {
    const res = await apiService.getAll();
    const { data } = res;
    const selectedData = [];
    data.forEach((element) => {
      selectedData.push({
        mission_id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
        status: 'not a member',
      });
    });
    dispatch({
      type: GET_MISSIONS_DATA,
      payload: selectedData,
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
