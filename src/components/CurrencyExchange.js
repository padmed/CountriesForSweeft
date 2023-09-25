import { addCountryRates } from "../reducers/ratesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectMappedCountriesWithCurrency } from "../reducers/selectors";
import { selectBaseCurrency } from "../reducers/selectors";
import { selectRatesByCurrency } from "../reducers/selectors";
import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectRatesByCurrency); // Rates compared to baseCurrency
  const countries = useSelector(selectMappedCountriesWithCurrency); // Filtered state, Country name + currency props
  const baseCurrency = useSelector(selectBaseCurrency); // The currency of the country selected by the user
  const [baseInputValue, setbaseInputValue] = useState(0);
  const [convertedRate, setConvertedRate] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState({
    currencyName: "",
    currencySymbol: "",
  }); // Second country's currency props
  // Updates rates if the country selection changes

  useEffect(() => {
    if (baseCurrency && !rates) {
      dispatch(addCountryRates(baseCurrency.currency));
    }
  }, [baseCurrency]);

  const handleSelectChange = (e) => {
    const currencyName = e.target.value;
    const symbol = event.target.getAttribute("data-symbol");

    setSelectedCurrency({ currencyName, symbol });
    setbaseInputValue(0); // Resets baseCurrency input if the country changes
    setConvertedRate(0);
  };

  const convertRate = (e) => {
    const baseValue = e.target.value;
    const rate = rates[selectedCurrency.currencyName] || 0;
    setbaseInputValue(baseValue);
    setConvertedRate(rate * baseValue);
  };

  return (
    <Container
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.2)",
        borderRadius: "2px",
        marginTop: "10px",
      }}
    >
      <Select
        id="countries"
        variant="standard"
        value={selectedCurrency.currencyName}
        displayEmpty
        onChange={handleSelectChange}
        sx={{ marginBottom: "50px", marginTop: "15px" }}
      >
        <MenuItem hidden disabled value="">
          Please select the target currency
        </MenuItem>
        {countries.map((country) => (
          <MenuItem
            key={country.name + country.currencyName}
            value={country.currency}
            data-symbol={country.currencySymbol}
          >
            {`${country.name} (${country.currency})`}
          </MenuItem>
        ))}
      </Select>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "20vh",
        }}
      >
        <TextField
          label={`Enter amount in ${baseCurrency.currency}`}
          value={baseInputValue}
          onChange={convertRate}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {baseCurrency.currencySymbol}
              </InputAdornment>
            ),
          }}
          type="number"
        />
        <ArrowForwardIosIcon sx={{ marginLeft: "15px" }} />
        <TextField
          label={`Equivalent amount in ${selectedCurrency.currencyName}`}
          sx={{ marginLeft: "15px" }}
          value={convertedRate}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {selectedCurrency.symbol}
              </InputAdornment>
            ),
          }}
          type="number"
          disabled
        />
      </div>
    </Container>
  );
};

export default CurrencyExchange;
