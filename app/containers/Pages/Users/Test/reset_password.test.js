/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResetPassword from '../ResetPassword';
configure({ adapter: new Adapter() });
describe('testcase for testing login', () => {
  describe('Input Value', () => {
    it('updates on change', () => {
      const { queryByPlaceholderText } = render(<ResetPassword />);
      const input = queryByPlaceholderText('Email');
      fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
      expect(input.value).toBe('rajendilani07@gmail.com');
    });
  }
  );
  describe(' submit button', () => {
    describe('with empty field', () => {
      it('does not trigger log in function', () => {
        const login = jest.fn();
        window.alert = jest.fn();
        const { queryByTestId } = render(<ResetPassword login={login} />);
        const button = queryByTestId('reset');
        fireEvent.submit(queryByTestId('reset'));
        expect(button.disabled).toBeTruthy();
      });
    });
    describe('with data inside each field', () => {
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ResetPassword login={onClick} />);
        const input = queryByPlaceholderText('Email');
        fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
        const button = queryByTestId('reset');
        fireEvent.submit(queryByTestId('reset'));
        expect(button.disabled).not.toBeTruthy();
      });
      it('does not trigger with wrong data log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ResetPassword login={onClick} />);
        const input = queryByPlaceholderText('Email');
        fireEvent.change(input, { target: { value: 'rajendilani07@' } });
        const button = queryByTestId('reset');
        fireEvent.submit(queryByTestId('reset'));
        expect(button.disabled).toBeTruthy();
      });
    });
  });
});
