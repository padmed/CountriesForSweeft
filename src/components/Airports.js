import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCountryAirports } from "../reducers/airportsReducer";
import { selectAirportsByCountry } from "../reducers/selectors";
import AirportInfo from "./AirportInfo";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import helpers from "../utils/helpers";

const Airports = () => {
  const dispatch = useDispatch();
  const airports = useSelector(selectAirportsByCountry);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const [searchValue, setSearchValue] = useState("Search for an airport");

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

  const airportsToShow = helpers.filterAirports(searchValue, airports);

  return (
    <div>
      <TextField
        sx={{ marginBottom: "5px", marginLeft: "15px" }}
        onChange={handleInputChange}
        variant="standard"
        onFocus={() => {
          setSearchValue("");
        }}
        value={searchValue}
        label="Search for an airport"
      />
      <Table
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.2)",
          borderRadius: "2px",
          marginTop: "10px",
        }}
      >
        <TableBody>
          {airportsToShow.map((airport) => (
            <TableRow key={airport.icao + airport.iata}>
              <TableCell>
                <AirportInfo airportDetails={airport} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Airports;
