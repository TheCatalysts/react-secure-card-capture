import React from "react"; 
import { useDispatch } from "react-redux";
import { addCard } from "../../actions/cardActions";
import { useCardForm } from "../../utils/formUtils";
import InputField from "../input-components/InputField";
import listOfCountries from "../../utils/Countries";
import CountryDropdown from "../input-components/CountryDropdown";

const CreditForm = () => {
  const dispatch = useDispatch();

  const { cardData, selectedCountry, errors, handleChange, handleSubmit, handleSelectCountry } = useCardForm(
    {
      cardNumber: "",
      cardName: "",
      cardExpiry: "",
      cardCVC: "",
      cardCountry: "",
    },
    (card) => {
      dispatch(addCard(card));
    },
  );

  const generateId = (fieldName) => `credit-card-form-${fieldName}`;

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white-095 p-8 rounded shadow-md w-96">
          <h4 className="text-2xl header font-bold mb-6 text-center">Credit Card</h4>

          {/* Card Number Input */}
          <InputField
            id={generateId("cardNumber")}
            label="Card Number"
            value={cardData.cardNumber}
            onChange={(value) => handleChange("cardNumber", value)}
            error={errors.cardNumber}
            type="number"
            data-testid="credit-card-form-cardNumber"
          />

          <InputField
            id={generateId("cardName")}
            label="Card Name"
            value={cardData.cardName}
            onChange={(value) => handleChange("cardName", value)}
            error={errors.cardName}
            type="text"
            data-testid="credit-card-form-cardName"
          />
          <InputField
            id={generateId("cardExpiry")}
            label="Card Expiry"
            value={cardData.cardExpiry}
            onChange={(value) => handleChange("cardExpiry", value)}
            error={errors.cardExpiry}
            type="text"
            data-testid="credit-card-form-cardExpiry"
          />

          <InputField
            id={generateId("cardCVC")}
            label="Card CVC"
            value={cardData.cardCVC}
            onChange={(value) => handleChange("cardCVC", value)}
            error={errors.cardCVC}
            inputMode="numeric"
            type="number"
            data-testid="credit-card-form-cardCVC"
          />

          {/* Card Country Input */}
          <CountryDropdown
            selectedCountry={selectedCountry} 
            onSelectCountry={handleSelectCountry} 
            countries={listOfCountries}
          />
          {errors.cardCountry && (
            <p
              id={generateId("cardCountry-error")}
              className="errors"
              data-testid="credit-card-form-cardCountry-error"
            >
              {errors.cardCountry}
            </p>
          )}

          <button
            id={generateId("submit-button")}
            className="w-full text-white py-2 px-4 rounded hover-bg-primary focus:outline-none focus:ring"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreditForm;
