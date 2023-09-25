/* eslint-disable indent */
import { useEffect, useState } from "react";
import { saveCountryAirports } from "../reducers/airportsReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectAirportsByCountry } from "../reducers/selectors";
import AirportInfo from "./AirportInfo";

const Airports = () => {
  const dispatch = useDispatch();
  const airports = useSelector(selectAirportsByCountry);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const [searchValue, setSearchValue] = useState("Search for airport");

  useEffect(() => {
    if (!airports) {
      const countryCode = selectedCountry.cca2;
      dispatch(saveCountryAirports(countryCode));
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  if (!airports) {
    return null;
  }

  const airportsToShow =
    searchValue === "Search for airport"
      ? airports
      : airports.filter((airport) => {
          const string = `${airport.name} ${airport.city} ${airport.iata}`;
          return string.toLowerCase().includes(searchValue.toLowerCase());
        });

  return (
    <div>
      <h2>Airports</h2>
      <input
        onChange={handleInputChange}
        onFocus={() => {
          setSearchValue("");
        }}
        value={searchValue}
        type="text"
      />
      {airportsToShow.map((airport) => (
        <AirportInfo
          key={airport.icao + airport.iata}
          airportDetails={airport}
        />
      ))}
    </div>
  );
};

export default Airports;
