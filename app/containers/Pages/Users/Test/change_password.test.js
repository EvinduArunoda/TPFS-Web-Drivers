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
import ChangePassword from '../ChangePassword';
configure({ adapter: new Adapter() });
describe('testcase for testing login', () => {
  describe('Input Value', () => {
    it('updates on change', () => {
      const { queryByPlaceholderText } = render(<ChangePassword />);
      const input = queryByPlaceholderText('Password1');
      fireEvent.change(input, { target: { value: 'dilani' } });
      expect(input.value).toBe('dilani');
      const password = queryByPlaceholderText('Password2');
      fireEvent.change(password, { target: { value: 'dilani' } });
      expect(password.value).toBe('dilani');
    });
  }
  );
  describe(' submit button', () => {
    describe('with empty field', () => {
      it('does not trigger log in function', () => {
        const login = jest.fn();
        window.alert = jest.fn();
        const { queryByTestId } = render(<ChangePassword login={login} />);
        const button = queryByTestId('change');
        fireEvent.submit(queryByTestId('change'));
        expect(button.disabled).toBeTruthy();
      });
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ChangePassword login={onClick} />);
        const input = queryByPlaceholderText('Password1');
        fireEvent.change(input, { target: { value: 'rajendilani' } });
        const button = queryByTestId('change');
        fireEvent.submit(queryByTestId('change'));
        expect(button.disabled).toBeTruthy();
      });
    });
    describe('with data inside each field', () => {
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ChangePassword login={onClick} />);
        const input = queryByPlaceholderText('Password1');
        fireEvent.change(input, { target: { value: 'dilani199707' } });
        const password = queryByPlaceholderText('Password2');
        fireEvent.change(password, { target: { value: 'dilani199707' } });
        const button = queryByTestId('change');
        fireEvent.submit(queryByTestId('change'));
        expect(button.disabled).not.toBeTruthy();
      });
      it('does not trigger with wrong data log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ChangePassword login={onClick} />);
        const input = queryByPlaceholderText('Password1');
        fireEvent.change(input, { target: { value: 'dilani199707' } });
        const password = queryByPlaceholderText('Password2');
        fireEvent.change(password, { target: { value: 'dilani19970' } });
        const button = queryByTestId('change');
        fireEvent.submit(queryByTestId('change'));
        expect(button.disabled).toBeTruthy();
      });
    });
  });
});
