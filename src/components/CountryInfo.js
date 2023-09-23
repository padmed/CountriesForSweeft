/* eslint-disable indent */
import { useSelector } from "react-redux";
import numeral from "numeral";
import { selectMappedCountries } from "../reducers/selectors";

const CountryInfo = () => {
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const countries = useSelector(selectMappedCountries); // Data in state in minimized to prevent getting unnecessury data

  if (!selectedCountry) {
    return null;
  }

  const formattedCurrency = Object.keys(selectedCountry.currencies)
    .map((currency) => {
      const { name, symbol } = selectedCountry.currencies[currency];
      return `${name} (${symbol})`;
    })
    .join(", ");

  const formatContinets =
    selectedCountry.continents.length === 1
      ? selectedCountry.continents[0]
      : selectedCountry.continents.join(", ");

  const formatPopulation = numeral(selectedCountry.population).format("0,0");

  const formatBorders =
    selectedCountry.borders.length > 0
      ? selectedCountry.borders
          .map((border) => countries.find((country) => country.code === border))
          .map((recieved) => recieved.name)
          .join(", ")
      : "No borders around this country";

  return (
    <div>
      <div>
        <h2>{selectedCountry.name.official}</h2>
        <img
          src={selectedCountry.flags.svg}
          alt={selectedCountry.flags.alt}
        ></img>
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <b>Capital: </b>
            </td>
            <td>{selectedCountry.capital}</td>
            <td>
              <b>Continent: </b>
            </td>
            <td>{formatContinets}</td>
          </tr>
          <tr>
            <td>
              <b>Currency: </b>
            </td>
            <td>{formattedCurrency}</td>
            <td>
              <b>Population: </b>
            </td>
            <td>{formatPopulation}</td>
          </tr>
          <tr>
            <td>
              <b>Region: </b>
            </td>
            <td>{selectedCountry.region}</td>
            <td>
              <b>Borders: </b>
            </td>
            <td>{formatBorders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryInfo;
