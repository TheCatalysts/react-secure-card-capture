import React from 'react';
import { useSelector } from 'react-redux';

const CreditCardTable = () => {
  const cards = useSelector((state) => Object.values(state.cards));

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 text-2xl header">Stored Credit Cards</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2">Card Number</th>
              <th className="py-2">Card Name</th>
              <th className="py-2">Card Expiry</th>
              <th className="py-2">Card CVC</th>
              <th className=" py-2">Card Country</th>
            </tr>
          </thead>
          <tbody>
            {cards?.map((card, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2">{card.cardNumber}</td>
                <td className="px-4 py-2">{card.cardName}</td>
                <td className="px-4 py-2">{card.cardExpiry}</td>
                <td className="px-4 py-2">{card.cardCVC}</td>
                <td className="px-4 py-2">{card.cardCountry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreditCardTable;
