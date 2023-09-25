/* eslint-disable indent */
import { useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";
import helpers from "../utils/countryHelpers";
// import { Grid } from "@mui/material";

const CountryInfo = () => {
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const countries = useSelector(selectMappedCountries); // Data in state in minimized to prevent getting unnecessury data

  if (!selectedCountry) {
    return null;
  }

  const formattedCurrency = helpers.formatCurrency(selectedCountry.currencies);
  const formattedContinents = helpers.formatContinents(
    selectedCountry.continents,
  );
  const formatPopulation = helpers.formatPopulation(selectedCountry.population);
  const formatBorders = helpers.formatBorders(
    selectedCountry.borders,
    countries,
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", margin: "0", marginRight: "20px" }}>
          {selectedCountry.name.official}
        </h2>

        <img
          src={selectedCountry.flags.svg}
          alt={selectedCountry.flags.alt}
          style={{ width: "5%" }}
        />
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
            <td>{formattedContinents}</td>
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
