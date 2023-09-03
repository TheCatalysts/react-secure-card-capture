import React from "react";
import listOfCountries from "../../utils/Countries";

const CountryDropdown = ({ selectedCountry, onSelectCountry }) => {
  return (
    <div className="mb-2">
      <select
        data-testid="country-dropdown"
        value={selectedCountry}
        onChange={(e) => {
          const selectedValue = e.target.value;
          onSelectCountry(selectedValue); // Call onSelectCountry with the selected value
        }}
        className="w-full p-2 rounded border focus:outline-none focus:ring"
      >
        <option value="">Select a card country</option>
        {listOfCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
