import { updateRates } from "../reducers/ratesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectMappedCountriesWithCurrency } from "../reducers/selectors";
import { selectBaseCurrency } from "../reducers/selectors";

const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const rates = useSelector((state) => state.rates); // Rates compared to baseCurrency
  const countries = useSelector(selectMappedCountriesWithCurrency); // Filtered state, Country name + currency props
  const baseCurrency = useSelector(selectBaseCurrency); // The currency of the country selected by the user
  const [baseInputValue, setbaseInputValue] = useState(0);
  const [convertedRate, setConvertedRate] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState({
    currencyName: null,
    currencySymbol: null,
  }); // Second country's currency props

  // Updates rates if the country selection changes
  useEffect(() => {
    if (baseCurrency) {
      dispatch(updateRates(baseCurrency.currency));
    }
  }, [baseCurrency]);

  const handleSelectChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const currencyName = selectedOption.getAttribute("data-currency");
    const currencySymbol = selectedOption.getAttribute("data-symbol");
    setSelectedCurrency({ currencyName, currencySymbol });
    setbaseInputValue(0); // Resets baseCurrency input if the country changes
    setConvertedRate(0)
  };

  const convertRate = (e) => {
    const baseValue = e.target.value;
    const rate = rates[selectedCurrency.currencyName] || 0;
    setbaseInputValue(baseValue);
    setConvertedRate(rate * baseValue);
  };

  return (
    <div>
      <select id="countries" onChange={handleSelectChange}>
        <option hidden>Please select the target currency</option>
        {countries.map((country) => (
          <option
            key={country.name + country.currencyName}
            data-currency={country.currency}
            data-symbol={country.currencySymbol}
          >
            {`${country.name} (${country.currency})`}
          </option>
        ))}
      </select>

      <div>
        <input type="number" value={baseInputValue} onChange={convertRate} />
        <input type="number" value={convertedRate} disabled />
      </div>
    </div>
  );
};

export default CurrencyExchange;
