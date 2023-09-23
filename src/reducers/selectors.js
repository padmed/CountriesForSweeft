import { createSelector } from "reselect";

const selectCountriesData = (state) => state.countries;

export const selectMappedCountries = createSelector(
  [selectCountriesData],
  (countries) => {
    return countries.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));
  },
);
