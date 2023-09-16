import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import CreditForm from '../components/card-form/CreditForm';

const mockStore = configureStore([]);
describe('CreditCardForm Component', () => {
  it('renders without crashing', () => {
    const initialState = {
      cardReducer: {
        cardNumber: '1234567890123456',
      },
    };
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <CreditForm />
      </Provider>
    );
    expect(getByTestId('credit-form')).toBeInTheDocument();
  });

})
