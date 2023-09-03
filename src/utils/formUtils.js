
import { useState } from "react";
import bannedCountries from "./BannedCountries";

export const useCardForm = (initialCardData, onSubmit) => {
  const [cardData, setCardData] = useState(initialCardData);
  const [errors, setErrors] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(""); // Track selectedCountry separately


  const handleChange = (field, value) => {
    setCardData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSelectCountry = (selectedCountry) => {
    if (bannedCountries.includes(selectedCountry)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardCountry: "The selected country is banned",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardCountry: "",
      }));
      setSelectedCountry(selectedCountry);
      setCardData((prevData) => ({ ...prevData, cardCountry: selectedCountry }));

    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateCardData(cardData);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(cardData);
      setCardData(initialCardData);
      setErrors({});
      setSelectedCountry("");
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    cardData,
    handleChange,
    selectedCountry,
    handleSubmit,
    handleSelectCountry,
    errors,
  };
};

// Validation function
const validateCardData = (cardData) => {
  const errors = {};

  if (!validateInput(cardData.cardNumber)) {
    errors.cardNumber = "Card Number is required.";
  } else if (cardData.cardNumber.length !== 16) {
    errors.cardNumber = "Card Number must be 16 digits.";
  } else if (!/^\d{16}$/.test(cardData.cardNumber)) {
    errors.cardNumber = "Invalid Card Number.";
  }

  const truncatedExpiry = cardData.cardExpiry.replace(/\D/g, "").slice(0, 4);
  if (!/^(0[1-9]|1[0-2])(\d{0,2})$/.test(truncatedExpiry)) {
    errors.cardExpiry = "Invalid Card Expiry.";
  } else {
    const month = parseInt(truncatedExpiry.slice(0, 2));
    const year = truncatedExpiry.slice(2);
    if (month > 12 || year.length !== 2) {
      errors.cardExpiry = "Invalid Card Expiry.";
    }
  }

  if (!validateInput(cardData.cardName)) {
    errors.cardName = "Card Name is required.";
  }

  if (!validateInput(cardData.cardCVC)) {
    errors.cardCVC = "CVC is required.";
  } else {
    const numericCVC = cardData.cardCVC.replace(/\D/g, "");
    if (numericCVC.length !== 3) {
      errors.cardCVC = "CVC must be 3 digits.";
    }
  }

  return errors;
};

const validateInput = (value) => {
  return value.trim() !== "";
};
