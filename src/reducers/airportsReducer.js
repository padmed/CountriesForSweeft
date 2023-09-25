import airportServices from "../services/airports";
import { createSlice } from "@reduxjs/toolkit";

const airportsSlice = createSlice({
  name: "airports",
  initialState: [],
  reducers: {
    setAirports: (state, action) => {
      const countryCode = action.payload.countryCode;
      const airports = action.payload.airportsToSave;
      return { ...state, [countryCode]: airports };
    },
  },
});

export default airportsSlice.reducer;
const { setAirports } = airportsSlice.actions;

export const saveCountryAirports = (countryCode) => {
  return async (dispatch) => {
    const airports = await airportServices.getAirports(countryCode);
    const airportsToSave = airports.filter((airport) => airport.iata !== "");
    dispatch(setAirports({ airportsToSave, countryCode }));
  };
};
