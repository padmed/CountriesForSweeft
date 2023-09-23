import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countriesReducer";
import selectedCountryReducer from "./reducers/selectedCountryReducer";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer,
  },
});

export default store;
