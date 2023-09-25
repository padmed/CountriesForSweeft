import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesReducer";
import selectedCountryReducer from "./reducers/selectedCountryReducer";
import ratesReducer from "./reducers/ratesReducer";
import airportsReducer from "./reducers/airportsReducer";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer,
    rates: ratesReducer,
    airports: airportsReducer,
  },
});

export default store;
