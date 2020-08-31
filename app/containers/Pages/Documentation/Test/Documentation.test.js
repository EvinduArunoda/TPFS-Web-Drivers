/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Documentation from '../Documentation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Documentation />, div);
}
);
