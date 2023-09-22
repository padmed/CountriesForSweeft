import { useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";
import { useNavigate } from "react-router-dom";

const CountrySelect = () => {
  const countries = useSelector(selectMappedCountries);
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const countryCode = selectedOption.getAttribute("data-country-code");
    navigate(`/${countryCode}`);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="" hidden>
        Choose the country
      </option>
      {countries.map((country) => (
        <option key={country.code} data-country-code={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
