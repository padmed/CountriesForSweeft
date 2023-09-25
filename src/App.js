import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";
import CountryInfo from "./components/CountryInfo";
import Navigation from "./components/Navigation";
import CurrencyAirportRouter from "./routers/CurrencyAirportRouter";
import { Grid } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      direction="column"
    >
      <Grid item xs={12} style={{ minHeight: "70px", width: "100%" }}>
        <CountrySelect />
      </Grid>
      <Grid item xs={12} style={{ minHeight: "250px", width: "100%" }}>
        <CountryInfo />
      </Grid>
      <Grid item xs={12} style={{ minHeight: "50px", width: "100%" }}>
        <Navigation />
      </Grid>
      <Grid item xs={12} style={{ minHeight: "500px", width: "100%" }}>
        <CurrencyAirportRouter />
      </Grid>
    </Grid>
  );
};

export default App;
