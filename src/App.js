/* eslint-disable indent */
import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";
import CountryInfo from "./components/CountryInfo";
import Navigation from "./components/Navigation";
import CurrencyExchange from "./components/CurrencyExchange";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Airports from "./components/Airports";

const App = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const path = useLocation();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <>
      <CountrySelect />
      <CountryInfo />
      <Navigation />

      {selectedCountry &&
        selectedCountry.cca3 === path.pathname.split("/")[1] && (
          <Routes>
            <Route
              path={`/${selectedCountry.cca3}/airports`}
              element={<Airports />}
            />
            <Route
              path={`/${selectedCountry.cca3}`}
              element={<CurrencyExchange />}
            />
          </Routes>
        )}
    </>
  );
};

export default App;
