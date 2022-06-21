import getAllContinents from '../components/Data/Data';

// Actions types
const GET_DATA = 'metrics-webapp/continent/GET_DATA';
const DISPLAY_DATA = 'metrics-webapp/continent/DISPLAY_DATA';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;

    case DISPLAY_DATA:
      return state.map((continent) => {
        if (continent.id !== action.payload) return continent;
        return { ...continent, reserved: true };
      }); // CHECK THIS !!!!

    default:
      return state;
  }
}

// Action Creators
const getAllData = async (dispatch, getState) => {
  const { reduContinent: currentContinentsData } = getState();
  if (currentContinentsData && currentContinentsData.length === 0) {
    const continents = await getAllContinents();
    dispatch({ type: GET_DATA, payload: continents });
  }
};

const displayContinents = (id) => ({ type: DISPLAY_DATA, payload: id });

export { getAllData, displayContinents };
