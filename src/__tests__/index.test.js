import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import App from '../App';
import store, { persistor } from '../redux/configureStore';

test('Should match the snapshot', async () => {
  const dom = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>,
  );
  await act(() => expect(dom).toMatchSnapshot());
});
