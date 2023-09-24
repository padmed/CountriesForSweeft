import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation, Route, Routes } from "react-router-dom";
import Airports from "../components/Airports";
import CurrencyExchange from "../components/CurrencyExchange";

const CurrencyAirportRouter = () => {
    const selectedCountry = useSelector((state) => state.selectedCountry);
    const path = useLocation();
    return (<>
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
        )}</>)
}

export default CurrencyAirportRouter