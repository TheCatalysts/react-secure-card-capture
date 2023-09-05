import React from 'react';
import './App.css';
import CreditForm from './components/card-form/CreditForm';
import CreditCardTable from './components/credit-card-table/CreditCardTable';
import Notification from './components/Notification'; 

function App() {
  return (
    <div className="App" data-testid="App">
      <Notification />
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-90-vw bg-white-095 rounded shadow-md">

          <div className="flex">
            <div className="w-1/3 p-8">
              <CreditForm />
            </div>
            <div className="w-2/3 p-8 credit-cards-table-container">
              <CreditCardTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
