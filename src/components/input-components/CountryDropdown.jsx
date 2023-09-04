import React, { useState } from "react";
import listOfCountries from "../../utils/Countries";

import ErrorMesseges from "./ErrorMessages";
import bannedCountries from "../../utils/BannedCountries";

const CountryDropdown = ({ value, setIsValid, onChange }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="mb-2">
      <select
        data-testid="country-dropdown"
        value={value}
        onBlur={() => setTouched(true)}
        onChange={(e) => {
          const selectedValue = e.target.value;

          console.log(selectedValue);
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
        />
      }
    </div>
  );
};

export default CountryDropdown;
