import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Country from '../pages/Country';
import store, { persistor } from '../redux/configureStore';
import { getCountryInfo } from '../redux/country';

describe('Test Country page', () => {
  test('Should match the snapshot', () => {
    const dom = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Country />
          </Router>
        </PersistGate>
      </Provider>,
    );
    expect(dom).toMatchSnapshot();
  });

  test('Should return an object with the info of the country', async () => {
    const countries = await getCountryInfo('Moroco');
    expect(countries.length).toBe(1);
  });
})

