import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import UserMissions from '../components/user/user-missions';

test('check snapshot of user mission seccion', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <UserMissions name="mission 1" />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});

test('check snapshot of user mission seccion', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <UserMissions name="mission 2" />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});
