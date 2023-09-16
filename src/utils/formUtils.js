import { useState } from "react";

export const useCardForm = (initialCardData, onSubmit) => {
  const [cardData, setCardData] = useState(initialCardData);
  const [errors, setCardErrors] = useState({});

  const handleChange = (field, value) => {
    setCardData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(cardData);
  };

  return {
    cardData,
    handleChange,
    handleSubmit,
    errors,
    setCardErrors
  };
};