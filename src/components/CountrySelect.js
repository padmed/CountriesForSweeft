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
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();

  useEffect(() => {
    if (path.pathname === "/") {
      dispatch(setCurrentLocation()); // Sets the location of user
    } else if (path.pathname !== "/" && !selectedCountry) {
      const countryCode = path.pathname.slice(1); // After refreshing the page, this sets the state to country specified by url
      dispatch(setSelectedCountry(countryCode));
    }

    // Whenever state of selectedCountry is changed url is changed as well
    if (selectedCountry) {
      navigate(`/${selectedCountry.cca3}`);
    }
  }, [selectedCountry, countries]);

  const handleSelectChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const countryCode = selectedOption.getAttribute("data-country-code");
    dispatch(setSelectedCountry(countryCode));
  };

  const initialValue = selectedCountry ? (
    <option data-country-code={selectedCountry.cca3}>
      {selectedCountry.name.common}
    </option>
  ) : (
    <option>Choose the country</option>
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
