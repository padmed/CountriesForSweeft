import { createSlice } from "@reduxjs/toolkit";
import rateServices from "../services/rates";

const ratesSlice = createSlice({
  name: "rates",
  initialState: [],
  reducers: {
    setRates: (state, action) => {
      const baseCurrency = action.payload.baseCurrency;
      return [...state, { [baseCurrency]: action.payload.rates }];
    },
  },
});

export default ratesSlice.reducer;
const { setRates } = ratesSlice.actions;

export const addCountryRates = (baseCurrency) => {
  return async (dispatch) => {
    const rates = await rateServices.getRates(baseCurrency);
    dispatch(setRates({ rates, baseCurrency }));
  };
};
