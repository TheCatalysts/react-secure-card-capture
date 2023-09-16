import React, { useEffect } from "react";
import { inputValidator } from "../../utils/validations";
const ErrorMessages = ({ label, value, validations, setIsValid, touched }) => {
  const errors = inputValidator(label, value, validations);

  useEffect(() => {
    setIsValid(errors.length === 0);
  }, [errors, setIsValid]);

  return touched ? (
    <div className="mb-2">
      {errors?.length ? <p className="errors" data-testid="error">{errors[0]}</p> : null}
    </div>
  ) : null;
};

export default ErrorMessages;
