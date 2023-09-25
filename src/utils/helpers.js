/* eslint-disable prettier/prettier */
import numeral from "numeral";

const formatCurrency = (currencies) => {
  return Object.keys(currencies)
    .map((currency) => {
      const { name, symbol } = currencies[currency];
      return `${name} (${symbol})`;
    })
    .join(", ");
};

const formatContinents = (continents) => {
  return continents.length === 1 ? continents[0] : continents.join(", ");
};

const formatPopulation = (population) => {
  return numeral(population).format("0,0");
};

const formatBorders = (borders, countries) => {
  return borders.length > 0
    ? borders
      .map((border) => countries.find((country) => country.code === border))
      .map((received) => received.name)
      .join(", ")
    : "No borders around this country";
};

const filterAirports = (searchValue, airports) => {
  return searchValue === "Search for an airport"
    ? airports
    : airports.filter((airport) => {
      const string = `${airport.name} ${airport.city} ${airport.iata}`;
      return string.toLowerCase().includes(searchValue.toLowerCase());
    });
}


export default {
  filterAirports,
  formatCurrency,
  formatContinents,
  formatPopulation,
  formatBorders,
};
