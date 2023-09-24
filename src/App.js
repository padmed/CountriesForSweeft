import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";
import CountryInfo from "./components/CountryInfo";
import Navigation from "./components/Navigation";
import CurrencyAirportRouter from "./routers/CurrencyAirportRouter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <>
      <CountrySelect />
      <CountryInfo />
      <Navigation />
      <CurrencyAirportRouter />
    </>
  );
};

export default App;
