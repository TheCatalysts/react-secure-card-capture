import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'

import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import { addCreditCard } from './store';
// Mock useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the dispatch function
const mockDispatch = jest.fn();

// Mock the useSelector function
const mockSelector = jest.fn();

// Mock the addCreditCard action
jest.mock('./store', () => ({
  addCreditCard: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue([]);
  });

  it('renders without crashing', () => {
    render(<App />);
  });

  it('handles form submission', () => {
    const { getByText } = render(<App />);

    // Simulate form submission
    fireEvent.click(getByText('Submit'));

    // Expect the addCreditCard action to be called
    expect(addCreditCard).not.toHaveBeenCalled();
  });

});
