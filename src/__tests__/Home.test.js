import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import store, { persistor } from '../redux/configureStore';
import { getAllData } from '../redux/continent';
import { getAllContinents } from '../components/Data/Data';

describe('Test: Home page', () => {
  test('Should match the snapshot', () => {
    const dom = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Home />
          </Router>
        </PersistGate>
      </Provider>,
    );
    expect(dom).toMatchSnapshot();
  });

  test('Should return initial state', async () => {
    const continents = await getAllData();
    expect(continents.length).toBe(1);
  });

  test('Should return an array with continents', async () => {
    const continents = await getAllContinents();
    expect(continents.length).toBe(6);
  });
});
