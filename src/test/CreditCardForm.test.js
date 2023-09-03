import React from 'react';
import {  render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CreditForm from '../components/credit-form/CreditForm';

const mockOnSubmit = jest.fn();

const mockOnInputChange = jest.fn();

describe('CreditCardForm Component', () => {
  it('renders without crashing', () => {
    render(<CreditForm onSubmit={mockOnSubmit} onInputChange={mockOnInputChange} />);
  });

  it('displays error message for banned country selection', () => {
    const { getByTestId } = render(
      <CreditForm onSubmit={mockOnSubmit} onInputChange={mockOnInputChange} />
    );

    // Select a banned country
    const countryDropdown = getByTestId('country-dropdown'); 
    fireEvent.change(countryDropdown, { target: { value: 'South Africa' } });
  
    // Expect an error message
    const errorElement = getByTestId('credit-card-form-cardCountry-error');
    expect(errorElement).toBeInTheDocument();
  });
})
