import React, { useState } from "react";
import ErrorMesseges from "./ErrorMessages";

const InputField = ({
  id,
  label,
  value,
  onChange,
  type,
  name,
  validations,
  setIsValid,
}) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        onBlur={() => setTouched(true)}
        id={id}
        name={name}
        className={`primary-input w-full p-2 rounded border focus:outline-none focus:ring `}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {
        <ErrorMesseges
          label={label}
          validations={validations}
          value={value}
          setIsValid={setIsValid}
          touched={touched}
        />
      }
    </div>
  );
};

export default InputField;
