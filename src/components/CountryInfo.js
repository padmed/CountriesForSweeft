/* eslint-disable indent */
import { useSelector } from "react-redux";
import { selectMappedCountries } from "../reducers/selectors";
import helpers from "../utils/helpers";
import CountryInfoTable from "./CountryInfoTable";
import { containerBorder } from "../utils/styles";

const CountryInfo = () => {
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const countries = useSelector(selectMappedCountries); // Data in state in minimized to prevent getting unnecessury data

  if (!selectedCountry) {
    return (
      <div
        style={{
          ...containerBorder,
          marginTop: "10px",
          height: "150px",
        }}
      ></div>
    );
  }

  const formattedCurrency = helpers.formatCurrency(selectedCountry.currencies);
  const formattedContinents = helpers.formatContinents(
    selectedCountry.continents,
  );
  const formattedPopulation = helpers.formatPopulation(
    selectedCountry.population,
  );
  const formattedBorders = helpers.formatBorders(
    selectedCountry.borders,
    countries,
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          marginBottom: "50px",
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
      <CountryInfoTable
        formattedBorders={formattedBorders}
        formattedPopulation={formattedPopulation}
        formattedContinents={formattedContinents}
        formattedCurrency={formattedCurrency}
        selectedCountry={selectedCountry}
      />
    </div>
  );
};

export default CountryInfo;
