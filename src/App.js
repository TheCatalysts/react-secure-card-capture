import React from 'react';
import './App.css';
import CreditForm from './components/card-form/CreditForm';
import CreditCardTable from './components/credit-card-table/CreditCardTable';
import Notification from './components/Notification'; // Add this import

function App() {
  return (
    <div className="App">
      <Notification />
      <CreditForm />
      <CreditCardTable /> 
    </div>
  );
}

export default App;
