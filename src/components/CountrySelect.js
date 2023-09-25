import { useDispatch, useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  setSelectedCountry,
  setCurrentLocation,
} from "../reducers/selectedCountryReducer";
// Styles
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CountrySelect = () => {
  const countries = useSelector(selectMappedCountries); // Data in state in minimized to prevent getting unnecessury data
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();

  useEffect(() => {
    // If no country set, tries to set user's current location
    if (path.pathname === "/") {
      dispatch(setCurrentLocation());
    }
    // When a country is selected and the page is refreshed, the state is updated to the previously selected country
    else if (path.pathname !== "/" && !selectedCountry) {
      const countryCode = path.pathname.split("/")[1];
      dispatch(setSelectedCountry(countryCode));
    }

    // "When the user selects a different country, this updates the URL accordingly."
    if (selectedCountry) {
      let url = `/${selectedCountry.cca3}`;
      if (path.pathname.includes("airports")) {
        url += "/airports";
      }
      navigate(url);
    }
  }, [selectedCountry, countries]);

  const handleSelectChange = (e) => {
    const countryCode = e.target.value;
    dispatch(setSelectedCountry(countryCode));
  };

  return (
    <Select
      value={selectedCountry ? selectedCountry.cca3 : ""} // Use the country code as the value
      sx={{ width: "100%" }}
      onChange={handleSelectChange}
      displayEmpty
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: "300px", // Set a fixed max height for the dropdown
          },
        },
      }}
    >
      <MenuItem hidden disabled value="">
        Please select the country
      </MenuItem>
      {countries.map((country) => (
        <MenuItem
          key={country.code}
          value={country.code}
          style={{ height: "50px" }}
        >
          {country.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
