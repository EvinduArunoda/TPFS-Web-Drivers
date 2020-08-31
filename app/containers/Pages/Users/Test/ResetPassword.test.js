/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ResetPassword from '../ResetPassword';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetPassword />, div);
}
);
