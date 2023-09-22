import { createSlice } from "@reduxjs/toolkit";
import countryServices from "../services/countries";

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    saveCountries: (state, action) => {
      return action.payload;
    },
  },
});

export default countriesSlice.reducer;
const { saveCountries } = countriesSlice.actions;

export const initCountries = () => {
  return async (dispatch) => {
    const request = await countryServices.getAll();
    dispatch(saveCountries(request));
  };
};
