import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../actions/cardActions";
import { useCardForm } from "../../utils/formUtils";
import InputField from "../input-components/InputField";
import listOfCountries from "../../utils/Countries";
import CountryDropdown from "../input-components/CountryDropdown";
import MonthPicker from '../input-components/MonthPicker'; 
import InfoModal from "../modal/InfoModal";

const CreditForm = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const [isDuplicateEntry, setIsDuplicateEntry] = useState(false)

  const { cardData, handleChange, handleSubmit} = useCardForm(
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

  const errors = useRef({});

  const isFormInvalid = () => {
    Object.values(errors).find((x) => x === false)
    return false;
  }
  const handleIsValidChange = (field, isValid) => {
    errors[field] = isValid;
  };

  const generateId = (fieldName) => `credit-card-form-${fieldName}`;

  const onSubmit = (event) => {
    event.preventDefault();
    const existing = cards[cardData.cardNumber];
    if (existing) {
      setIsDuplicateEntry(true);
    } else {
      handleSubmit()
    }
  }

  return (
    <>
      {
        isDuplicateEntry ?
          <div>
            <InfoModal onClose={() => { setIsDuplicateEntry(false) }} errorMessage={'Duplicate entry on card number: ' + cardData.cardNumber}></InfoModal>
          </div>
          : null
      }
      <form onSubmit={onSubmit} id ="credit-form">
        <h4 className="text-2xl header font-bold mb-6">Credit Card</h4>

        <InputField
          id={generateId("cardNumber")}
          label="Card Number"
          validations={{ minLength: 16, maxLength: 16, required: true }}
          value={cardData.cardNumber}
          onChange={(value) => handleChange("cardNumber", value)}
          type="number"
          data-testid="credit-card-form-cardNumber"
          setIsValid={(value) => handleIsValidChange("cardNumber", value)}
        />

        <InputField
          id={generateId("cardName")}
          label="Card Name"
          value={cardData.cardName}
          validations={{ required: true }}
          onChange={(value) => handleChange("cardName", value)}
          type="text"
          data-testid="credit-card-form-cardName"
          setIsValid={(value) => handleIsValidChange("cardName", value)}
        />
        <MonthPicker
          id={generateId("cardExpiry")}
          label="Card Expiry"
          value={cardData.cardExpiry}
          onChange={(value) => handleChange("cardExpiry", value)}
          validations={{ required: true }}
          type="text"
          data-testid="credit-card-form-cardExpiry"
          setIsValid={(value) => handleIsValidChange("cardExpiry", value)}
        />

        <InputField
          id={generateId("cardCVC")}
          label="Card CVC"
          validations={{ minLength: 3, maxLength: 3, required: true }}
          value={cardData.cardCVC}
          onChange={(value) => handleChange("cardCVC", value)}
          inputMode="numeric"
          type="number"
          data-testid="credit-card-form-cardCVC"
          setIsValid={(value) => handleIsValidChange("cardCVC", value)}
        />
        <CountryDropdown
          value={cardData.cardCountry}
          onChange={(value) => handleChange("cardCountry", value)}
          countries={listOfCountries}
          setIsValid={(value) => handleIsValidChange("cardCountry", value)}
        />

        <button
          id={generateId("submit-button")}
          className={`w-full text-white py-2 px-4 rounded hover-bg-primary focus:outline-none focus:ring` + (isFormInvalid() ? ' disabled' : '')}
          disabled={isFormInvalid()}

        >
          Submit
        </button>
      </form>
    </>

  );
};

export default CreditForm;
