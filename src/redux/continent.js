import { getAllContinents } from '../components/Data/Data';

// Actions types
const GET_DATA = 'metrics-webapp/continent/GET_DATA';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;

    default:
      return state;
  }
}

// Action Creators
export const getAllData = (getState) => async (dispatch) => {
  const { reduContinent: currentContinentsData } = getState();
  if (currentContinentsData && currentContinentsData.length === 0) {
    const continents = await getAllContinents();
    dispatch({ type: GET_DATA, payload: continents });
  }
};
