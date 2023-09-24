import { useDispatch, useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  setSelectedCountry,
  setCurrentLocation,
} from "../reducers/selectedCountryReducer";

const CountrySelect = () => {
  const countries = useSelector(selectMappedCountries); // Data in state in minimized to prevent getting unnecessury data
  const { selectedCountry } = useSelector(state => state)
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
    const selectedOption = e.target.options[e.target.selectedIndex];
    const countryCode = selectedOption.getAttribute("data-country-code");
    dispatch(setSelectedCountry(countryCode));
  };

  // Sets the default option for selection
  const initialValue = selectedCountry ? (
    <option hidden data-country-code={selectedCountry.cca3}>
      {selectedCountry.name.common}
    </option>
  ) : (
    <option hidden>Choose the country</option>
  );

  return (
    <select onChange={handleSelectChange}>
      {initialValue}
      {countries.map((country) => (
        <option key={country.code} data-country-code={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
