import React from "react";

const InputField = ({ id, label, value, onChange, error, type,name }) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      
      <input
        id={id}
        name={name} 
        className={`primary-input w-full p-2 rounded border focus:outline-none focus:ring ${
          error ? "border-red-500" : "border"
        }`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="errors">{error}</p>}
    </div>
  );
};

export default InputField;
