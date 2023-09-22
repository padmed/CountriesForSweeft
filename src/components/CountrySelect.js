import { useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";

const CountrySelect = () => {
  const countries = useSelector(selectMappedCountries);

  return (
    <select>
      {countries.map((country) => (
        <option key={country.code}>{country.name}</option>
      ))}
    </select>
  );
};

export default CountrySelect;
