import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const CountryInfoTable = ({
  selectedCountry,
  formattedContinents,
  formattedCurrency,
  formattedPopulation,
  formattedBorders,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <b>Capital:</b>
            </TableCell>
            <TableCell>{selectedCountry.capital}</TableCell>
            <TableCell>
              <b>Continent:</b>
            </TableCell>
            <TableCell>{formattedContinents}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Currency:</b>
            </TableCell>
            <TableCell>{formattedCurrency}</TableCell>
            <TableCell>
              <b>Population:</b>
            </TableCell>
            <TableCell>{formattedPopulation}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Region:</b>
            </TableCell>
            <TableCell>{selectedCountry.region}</TableCell>
            <TableCell>
              <b>Borders:</b>
            </TableCell>
            <TableCell>{formattedBorders}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CountryInfoTable.propTypes = {
  selectedCountry: PropTypes.object.isRequired,
  formattedContinents: PropTypes.string.isRequired,
  formattedCurrency: PropTypes.string.isRequired,
  formattedPopulation: PropTypes.string.isRequired,
  formattedBorders: PropTypes.string.isRequired,
};
export default CountryInfoTable;
