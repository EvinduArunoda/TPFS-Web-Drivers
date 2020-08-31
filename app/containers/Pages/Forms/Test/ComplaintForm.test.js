/* eslint-disable no-shadow */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Enzyme, { shallow, configure, mount } from 'enzyme';
import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { queryByPlaceholderText } from 'react-testing-library';
// Redux II, way 1: Use our own Redux store
import { createStore, applyMiddleware } from 'redux';

// Redux II, way 2: Use a mock Redux store
import ReduxFormDemo from '../ReduxFormDemo';
configure({ adapter: new Adapter() });
const createStoreWithMiddleware = applyMiddleware()(createStore);
const mockStore = configureMockStore();
const store = mockStore({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReduxFormDemo />, div);
}
);
