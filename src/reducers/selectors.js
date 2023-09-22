import { createSelector } from "reselect";

// Select the raw countries data from the Redux state
const selectCountriesData = (state) => state.countries;

// Create a memoized selector using createSelector
export const selectMappedCountries = createSelector(
  [selectCountriesData], // Input selector(s)
  (countries) => {
    // Map the countries data into the desired format
    return countries.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));
  },
);
