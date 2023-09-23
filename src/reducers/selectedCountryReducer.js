import { createSlice } from "@reduxjs/toolkit";
import locationServices from "../services/location";

const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState: null,
  reducers: {
    setCountry: (state, action) => {
      return action.payload;
    },
  },
});

export default selectedCountrySlice.reducer;
const { setCountry } = selectedCountrySlice.actions;

const getCountryName = async (coordinates) => {
  try {
    const request = await locationServices.getCountryName(coordinates);
    const countryComponent = request.results.find((result) => {
      return result.types.includes("country");
    });

    const countryName = countryComponent.formatted_address;
    return countryName;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const setCurrentLocation = () => {
  return async (dispatch, getState) => {
    const state = getState();

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const countryName = await getCountryName({
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude,
      });

      const countryToSet = state.countries.find(
        (country) => country.name.common === countryName,
      );

      dispatch(setCountry(countryToSet));
    });
  };
};

export const setSelectedCountry = (code) => {
  return async (dispatch, getState) => {
    const state = getState();

    const countryToSet = state.countries.find(
      (country) => country.cca3 === code,
    );
    dispatch(setCountry(countryToSet));
  };
};
