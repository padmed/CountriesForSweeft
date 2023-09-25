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
import { containerBorder } from "../utils/styles";
import CircularProgress from "@mui/material/CircularProgress";

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
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ marginTop: "150px" }} />
      </div>
    );
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
      <Table sx={containerBorder}>
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
