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

export const selectMappedCountriesWithCurrency = createSelector(
  [selectCountriesData],
  (countries) => {
    return countries.map((country) => {
      // console.log(country);
      const currencyInfo =
        country.currencies && Object.values(country.currencies)[0];
      return {
        name: country.name.common,
        currency: currencyInfo ? Object.keys(country.currencies)[0] : "N/A",
        currencyName: currencyInfo ? currencyInfo.name : "N/A",
        currencySymbol: currencyInfo ? currencyInfo.symbol : "N/A",
      };
    });
  },
);

export const selectBaseCurrency = createSelector(
  [(state) => state.selectedCountry.currencies],
  (currencies) => {
    const currency = Object.values(currencies);
    return {
      currency: currency.length > 0 ? Object.keys(currencies)[0] : "N/A",
      currencyName: currency.length > 0 ? currency[0].name : "N/A",
      currencySymbol: currency.length > 0 ? currency[0].symbol : "N/A",
    };
  },
);
