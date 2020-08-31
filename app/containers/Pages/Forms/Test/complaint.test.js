/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, fireEvent } from '@testing-library/react';
import ReduxFormDemo from '../ReduxFormDemo';
configure({ adapter: new Adapter() });
describe('testcase for testing login', () => {
  describe('Input Value', () => {
    it('updates on change', () => {
      const { queryByPlaceholderText } = render(<ReduxFormDemo />);
      const input = queryByPlaceholderText('Voilation Type');
      fireEvent.change(input, { target: { value: 'rajendilani07@gmail.com' } });
      expect(input.value).toBe('rajendilani07@gmail.com');
      const complaint = queryByPlaceholderText('Complaint');
      fireEvent.change(complaint, { target: { value: 'dilani' } });
      expect(complaint.value).toBe('dilani');
    });
  }
  );
  describe(' submit button', () => {
    describe('with empty field', () => {
      it('does not trigger log in function', () => {
        const login = jest.fn();
        window.alert = jest.fn();
        const { queryByTestId } = render(<ReduxFormDemo login={login} />);
        const button = queryByTestId('complaint');
        fireEvent.submit(queryByTestId('complaint'));
        expect(button.disabled).toBeTruthy();
      });
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ReduxFormDemo login={onClick} />);
        const input = queryByPlaceholderText('Voilation Type');
        fireEvent.change(input, { target: { value: 'Voilation sd' } });
        const button = queryByTestId('complaint');
        fireEvent.submit(queryByTestId('complaint'));
        expect(button.disabled).toBeTruthy();
      });
    });
    describe('with data inside each field', () => {
      it('does trigger log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ReduxFormDemo onSubmit={onClick} />);
        const input = queryByPlaceholderText('Voilation Type');
        fireEvent.change(input, { target: { value: 'voilation' } });
        const complaint = queryByPlaceholderText('Complaint');
        fireEvent.change(complaint, { target: { value: 'dilani199707' } });
        const button = queryByTestId('complaint');
        const form = queryByTestId('form');
        fireEvent.submit(queryByTestId('complaint'));
        fireEvent.click(form);
        expect(button.disabled).not.toBeTruthy();
      });
      it('does not trigger with wrong data log in function', () => {
        const onClick = jest.fn();
        window.alert = jest.fn();
        const { queryByPlaceholderText, queryByTestId } = render(<ReduxFormDemo login={onClick} />);
        const input = queryByPlaceholderText('Voilation Type');
        fireEvent.change(input, { target: { value: 'rajendilani07' } });
        const complaint = queryByPlaceholderText('Complaint');
        fireEvent.change(complaint, { target: { value: 'di07' } });
        const button = queryByTestId('complaint');
        const form = queryByTestId('form');
        fireEvent.submit(queryByTestId('complaint'));
        fireEvent.click(form);
        expect(button.disabled).toBeTruthy();
      });
    });
  });
});
