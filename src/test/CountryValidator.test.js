import CountryValidator from "../utils/validator/CountryValidator";

describe("CountryValidator", () => {
  const bannedCountries = ["United States", "United Kingdom", "California"];
  const countryValidator = new CountryValidator(bannedCountries);

  it("should correctly identify a banned country", () => {
    expect(countryValidator.validateCountry("United States")).toBe("The selected country is banned");
  });

  it("should return an error for banned country", () => {
    const result = countryValidator.validateCountry("United States");
    expect(result).toBe("The selected country is banned");
  });

  it("should return an error for missing country", () => {
    const result = countryValidator.validateCountry("");
    expect(result).toBe("Country is required");
  });

  it("should return no error for valid country", () => {
    const result = countryValidator.validateCountry("Senegal");
    expect(result).toBe("");
  });
});
