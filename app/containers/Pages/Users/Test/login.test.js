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
import LoginForm from '../LoginForm';
configure({ adapter: new Adapter() });
describe('testcase for testing login', () => {
  describe('Input Value', () => {
    it('updates on change', () => {
      const { queryByPlaceholderText, wrapper } = render(<LoginForm />);
      const input = queryByPlaceholderText('Email');
      fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
      expect(input.value).toBe('rajendilani07@gmail.com');
      const password = queryByPlaceholderText('Password');
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
        const { queryByTestId } = render(<LoginForm login={login} />);
        const button = queryByTestId('login');
        fireEvent.submit(queryByTestId('login'));
        expect(button.disabled).toBeTruthy();
      });
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<LoginForm login={onClick} />);
        const input = queryByPlaceholderText('Email');
        fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
        const button = queryByTestId('login');
        fireEvent.submit(queryByTestId('login'));
        expect(button.disabled).toBeTruthy();
      });
    });
    describe('with data inside each field', () => {
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<LoginForm login={onClick} />);
        const input = queryByPlaceholderText('Email');
        fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
        const password = queryByPlaceholderText('Password');
        fireEvent.change(password, { target: { value: 'dilani199707' } });
        const button = queryByTestId('login');
        const form = queryByTestId('form');
        fireEvent.submit(queryByTestId('login'));
        fireEvent.click(form);
        expect(button.disabled).not.toBeTruthy();
        expect(onClick).toBeDefined();
        expect(onClick).toHaveBeenCalledTimes(1);
      });
      it('does not trigger with wrong data log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<LoginForm login={onClick} />);
        const input = queryByPlaceholderText('Email');
        fireEvent.change(input, { target: { value: 'rajendilani07' } });
        const password = queryByPlaceholderText('Password');
        fireEvent.change(password, { target: { value: 'dilani199707' } });
        const button = queryByTestId('login');
        const form = queryByTestId('form');
        fireEvent.submit(queryByTestId('login'));
        fireEvent.click(form);
        expect(button.disabled).toBeTruthy();
      });
    });
  });
});
