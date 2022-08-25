import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Rocket from '../components/Rockets/Rocket';
import UserRockets from '../components/user/userRockets';

describe('Test suite for all Rockets features', () => {
  test('check snapshot of rocket list', () => {
    const rocketInst = {
      id: 1,
      rocket_name: 'rocket 1',
      description: 'rockets description',
      reserved: false,
      flickr_images: ['img1', 'img2'],
    };

    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rocket
              rocket={rocketInst}
            />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });

  test('check snapshot of rocket list 2', () => {
    const rocketInst2 = {
      id: 2,
      rocket_name: 'rocket 2',
      description: 'rockets description',
      reserved: false,
      flickr_images: ['img1', 'img2'],
    };

    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rocket
              rocket={rocketInst2}
            />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });

  test('check snapshot of user rocket section', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <UserRockets name="rocket 1" wiki="wiki1" />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });

  test('check snapshot of user rocket section', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <UserRockets name="rocket 2" wiki="wiki2" />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
