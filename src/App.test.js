import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';

const mockStore = configureMockStore();
const initialState = {
  cards: {
    cardNumber: '1234567890123456',
    cardName: 'John Doe',
    cardExpiry: '12/23',
    cardCVC: '123',
    cardCountry: 'US', },
};
const store = mockStore(initialState);

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const appElement = screen.getByTestId("App");
    expect(appElement).toBeInTheDocument();
  });

  const newLocal = 'credit-form';
  it('renders CreditForm component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const creditFormElement = screen.getByTestId(newLocal); 
    expect(creditFormElement).toBeInTheDocument();
  });

  it('renders CreditCardTable component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const creditCardTableElement = screen.getByTestId('credit-card-table-container');
    expect(creditCardTableElement).toBeInTheDocument();
  });
});
