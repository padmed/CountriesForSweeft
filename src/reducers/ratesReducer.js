import { createSlice } from "@reduxjs/toolkit";
import rateServices from "../services/rates";

const ratesSlice = createSlice({
  name: "rates",
  initialState: null,
  reducers: {
    setRates: (state, action) => {
      return action.payload;
    },
  },
});

export default ratesSlice.reducer;
const { setRates } = ratesSlice.actions;

export const updateRates = (baseCurrency) => {
  return async (dispatch) => {
    const rates = await rateServices.getRates(baseCurrency);
    dispatch(setRates(rates));
  };
};
