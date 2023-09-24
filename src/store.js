import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesReducer";
import selectedCountryReducer from "./reducers/selectedCountryReducer";
import ratesReducer from "./reducers/ratesReducer";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer,
    rates: ratesReducer,
  },
});

export default store;
