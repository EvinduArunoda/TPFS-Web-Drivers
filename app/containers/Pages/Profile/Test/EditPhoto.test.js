/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EditPhoto from '../EditPhoto';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPhoto />, div);
}
);
