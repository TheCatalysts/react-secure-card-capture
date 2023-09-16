import React, { useState } from "react";
import listOfCountries from "../../utils/Countries";

import ErrorMesseges from "./ErrorMessages";
import bannedCountries from "../../utils/BannedCountries";

const CountryDropdown = ({ value, setIsValid, onChange }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="mb-2">
      <select
        id="country-dropdown"
        data-testid="country-dropdown"
        value={value}
        onClick={() => setTouched(true)}
        onChange={(e) => {
          const selectedValue = e.target.value;
          onChange(selectedValue);
        }}
        className="primary-input w-full p-2 rounded border focus:outline-none focus:ring"
      >
        <option value="">Select a card country</option>
        {listOfCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      {
        <ErrorMesseges
          label="Country"
          validations={{ required: true, restricted: bannedCountries }}
          value={value}
          touched={touched}
          setIsValid={setIsValid}
          data-testid="country-error"
        />
      }
    </div>
  );
};

export default CountryDropdown;
