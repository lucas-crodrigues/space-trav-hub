import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Header from '../components/header';

test('check snapshot of header', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});
